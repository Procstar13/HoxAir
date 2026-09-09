"use client";

import { FormEvent, useState } from "react";
import { locations, services } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">Request service</span>
        <h2>How can we help?</h2>
        <p>This demo form does not transmit or store personal information.</p>
      </div>
      {sent ? (
        <div className="form-success" role="status">
          <strong>Demo request received.</strong>
          <p>For actual service, call HoxAir at <a href="tel:+16236986406">(623) 698-6406</a>.</p>
          <button className="text-button" type="button" onClick={() => setSent(false)}>Send another</button>
        </div>
      ) : (
        <>
          <div className="form-row">
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required maxLength={80} />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" required maxLength={24} />
            </label>
          </div>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required maxLength={120} />
          </label>
          <div className="form-row">
            <label>
              Service
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service.slug}>{service.name}</option>)}
              </select>
            </label>
            <label>
              City
              <select name="city" defaultValue="" required>
                <option value="" disabled>Select your area</option>
                {locations.map((location) => <option key={location.slug}>{location.label}</option>)}
                <option>Other Phoenix-area community</option>
              </select>
            </label>
          </div>
          <label>
            Tell us what is happening
            <textarea name="message" rows={4} maxLength={1000} />
          </label>
          <button className="button button-full" type="submit">Request an appointment</button>
          <small>Demo only. Please do not enter sensitive information.</small>
        </>
      )}
    </form>
  );
}
