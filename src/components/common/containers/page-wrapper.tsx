export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      role="main"
      className="relative flex w-full flex-col items-start justify-start overflow-hidden bg-colors-background-bg-primary tracking-[normal]"
    >
      {children}
    </main>
  );
}
