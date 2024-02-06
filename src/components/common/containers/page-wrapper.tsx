export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden bg-colors-background-bg-primary tracking-[normal]">
      {children}
    </div>
  );
}
