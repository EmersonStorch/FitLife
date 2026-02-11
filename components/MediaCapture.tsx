
import React, { useState, useRef, useEffect } from 'react';
import { Camera, Mic, Square, Play, Trash2, Send, Video, VideoOff, MicOff, RefreshCw } from 'lucide-react';

interface MediaCaptureProps {
  onSend: (blob: Blob, type: 'audio' | 'video') => void;
}

export const MediaCapture: React.FC<MediaCaptureProps> = ({ onSend }) => {
  const [mode, setMode] = useState<'idle' | 'audio' | 'video'>('idle');
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      stopStream();
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const startStream = async (type: 'audio' | 'video') => {
    try {
      const constraints = {
        audio: true,
        video: type === 'video' ? { facingMode: 'user' } : false
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      if (videoRef.current && type === 'video') {
        videoRef.current.srcObject = stream;
      }
      return stream;
    } catch (err) {
      console.error("Erro ao acessar mídia:", err);
      alert("Permissão de câmera/microfone negada ou dispositivo não disponível.");
      return null;
    }
  };

  const getSupportedMimeType = (type: 'audio' | 'video') => {
    const videoTypes = ['video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4'];
    const audioTypes = ['audio/webm', 'audio/mp4', 'audio/wav'];
    const candidates = type === 'video' ? videoTypes : audioTypes;
    
    for (const mimeType of candidates) {
      if (MediaRecorder.isTypeSupported(mimeType)) return mimeType;
    }
    return '';
  };

  const startRecording = async () => {
    const stream = await startStream(mode as 'audio' | 'video');
    if (!stream) return;

    const mimeType = getSupportedMimeType(mode as 'audio' | 'video');
    const options = mimeType ? { mimeType } : undefined;
    
    try {
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType || (mode === 'video' ? 'video/mp4' : 'audio/mp4') });
        setRecordedBlob(blob);
        setPreviewUrl(URL.createObjectURL(blob));
        stopStream();
      };

      mediaRecorder.start();
      setIsRecording(true);
      setDuration(0);
      timerRef.current = window.setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    } catch (e) {
      console.error("MediaRecorder error:", e);
      alert("Não foi possível iniciar a gravação no seu navegador.");
      stopStream();
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) window.clearInterval(timerRef.current);
    }
  };

  const reset = () => {
    setRecordedBlob(null);
    setPreviewUrl(null);
    setDuration(0);
    setMode('idle');
    stopStream();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (mode === 'idle') {
    return (
      <div className="grid grid-cols-2 gap-6 w-full">
        <button 
          onClick={() => setMode('video')}
          className="group flex flex-col items-center justify-center gap-6 p-12 bg-zinc-900 border border-zinc-800 rounded-[3rem] hover:border-emerald-500/50 transition-all hover:bg-zinc-800/50"
        >
          <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
            <Video size={32} />
          </div>
          <span className="text-white font-black text-xs uppercase tracking-widest">Vídeo Mensagem</span>
        </button>
        <button 
          onClick={() => setMode('audio')}
          className="group flex flex-col items-center justify-center gap-6 p-12 bg-zinc-900 border border-zinc-800 rounded-[3rem] hover:border-emerald-500/50 transition-all hover:bg-zinc-800/50"
        >
          <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
            <Mic size={32} />
          </div>
          <span className="text-white font-black text-xs uppercase tracking-widest">Áudio Report</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-900/50 rounded-[3.5rem] border border-zinc-800 p-8 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-8 px-4">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-zinc-700'}`} />
          <span className="text-white font-black text-[10px] uppercase tracking-widest">
            {isRecording ? 'Gravando...' : recordedBlob ? 'Revisar Gravação' : `Preparar ${mode === 'video' ? 'Vídeo' : 'Áudio'}`}
          </span>
        </div>
        <button onClick={reset} className="text-zinc-500 hover:text-white transition-colors">
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="relative w-full aspect-video bg-zinc-950 rounded-[2.5rem] overflow-hidden border border-zinc-800 mb-8 flex items-center justify-center">
        {mode === 'video' ? (
          previewUrl ? (
            <video src={previewUrl} controls className="w-full h-full object-cover" />
          ) : (
            <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover scale-x-[-1]" />
          )
        ) : (
          <div className="flex flex-col items-center gap-6">
            <Mic size={64} className={isRecording ? 'text-emerald-500 animate-bounce' : 'text-zinc-800'} />
            {previewUrl && <audio src={previewUrl} controls className="w-64" />}
          </div>
        )}
        
        {isRecording && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-950/80 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10 flex items-center gap-3">
             <span className="text-white font-mono font-bold">{formatTime(duration)}</span>
          </div>
        )}
      </div>

      <div className="flex gap-4 w-full">
        {!recordedBlob ? (
          !isRecording ? (
            <button 
              onClick={startRecording}
              className="flex-1 py-6 bg-emerald-500 text-zinc-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all uppercase text-xs tracking-widest shadow-xl"
            >
              Iniciar {mode === 'video' ? 'Câmera' : 'Microfone'}
            </button>
          ) : (
            <button 
              onClick={stopRecording}
              className="flex-1 py-6 bg-red-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-red-400 transition-all uppercase text-xs tracking-widest shadow-xl"
            >
              <Square size={18} fill="currentColor" /> Finalizar
            </button>
          )
        ) : (
          <>
            <button 
              onClick={() => { reset(); setMode(mode); }}
              className="flex-1 py-6 bg-zinc-800 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-700 transition-all uppercase text-xs tracking-widest"
            >
              <Trash2 size={18} /> Descartar
            </button>
            <button 
              onClick={() => recordedBlob && onSend(recordedBlob, mode as 'audio' | 'video')}
              className="flex-1 py-6 bg-emerald-500 text-zinc-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all uppercase text-xs tracking-widest shadow-xl"
            >
              <Send size={18} /> Enviar Report
            </button>
          </>
        )}
      </div>
    </div>
  );
};
