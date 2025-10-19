interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex w-full flex-col">{children}</div>
    </div>
  );
};

export { PageLayout };
