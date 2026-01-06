import signaturePen from '@/assets/signature-pen.svg';

export function SignatureBadge() {
  return (
    <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5">
      <img src={signaturePen} alt="Signature" className="h-3.5 w-3.5" />
      <span className="text-xs font-medium text-primary">Signature</span>
    </div>
  );
}
