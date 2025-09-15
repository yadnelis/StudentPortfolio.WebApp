import Image from "next/image";

export default function Home() {
  return (
    <div className="p-7 flex gap-4 flex-wrap *:size-20 *:border *:align-middle *:text-center">
      <div className="bg-base-100">base 100</div>
      <div className="bg-base-200">base 200</div>
      <div className="bg-base-content">base content</div>
      <div className="bg-primary">
        <span className="text-primary-content">primary content</span>
      </div>
      <div className="bg-secondary">
        <span className="text-secondary-content">secondary content</span>
      </div>
      <div className="bg-accent">
        <span className="text-accent-content">accent content</span>
      </div>
      <div className="bg-neutral">
        <span className="text-neutral-content">neutral content</span>
      </div>
      <div className="bg-info">
        <span className="text-info-content">info content</span>
      </div>
      <div className="bg-warning">
        <span className="text-warning-content">warning content</span>
      </div>
      <div className="bg-error">
        <span className="text-error-content">error content</span>
      </div>
    </div>
  );
}
