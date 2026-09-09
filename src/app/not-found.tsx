import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell narrow">
        <span className="eyebrow">404 error</span>
        <h1>That page could not be found.</h1>
        <p className="lead">The address may have changed, or the page may no longer exist.</p>
        <Link className="button" href="/">Return home</Link>
      </div>
    </section>
  );
}
