interface Props {
  text?: string;
}

export default function ContactButton({ text = '联系我' }: Props) {
  return (
    <button
      className="relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-white font-medium uppercase tracking-widest
        text-xs sm:text-sm md:text-base
        shadow-[0px_4px_4px_rgba(181,1,167,0.25),4px_4px_12px_#7721B1_inset]
        outline outline-2 outline-white outline-offset-[-3px]
        transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      }}
    >
      {text}
    </button>
  );
}
