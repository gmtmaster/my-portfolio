"use client";
import { useState } from "react";

function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                form.reset();
                setStatus("success");
            } else {
                // Formspree returns JSON with an "errors" array
                const data = await res.json().catch(() => ({}));
                const msg =
                    data?.errors?.map((e: any) => e.message).join(", ") ||
                    "There was an error submitting your message. Please try again.";
                setErrorMsg(msg);
                setStatus("error");
            }
        } catch (err) {
            setErrorMsg("There was an error submitting your message. Please try again.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="w-full py-12 border-t border-[#ffffff10]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec ">Let's talk</h2>
                <h3 className="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
                    Contact
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-[var(--white-icon)]">
                        <p className="mb-4">
                            Have a question or a project in mind? Feel free to reach out.
                        </p>
                        <div className="flex items-center gap-2">
                            <span>Location:</span>
                            <span className="text-[var(--white)]">Europe</span>
                        </div>
                    </div>

                    <div>
                        {status === "success" ? (
                            <div
                                id="form-message"
                                className="flex justify-center items-center mt-4 text-[var(--white)] text-lg"
                                aria-live="polite"
                            >
                                Thank you for your message!
                            </div>
                        ) : (
                            <form
                                id="contact-form"
                                action="https://formspree.io/f/mandylky"
                                method="POST"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Name"
                                    required
                                    disabled={status === "submitting"}
                                    className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)] disabled:opacity-60"
                                />

                                <input
                                    type="email"
                                    name="reply_to"
                                    placeholder="Email"
                                    required
                                    disabled={status === "submitting"}
                                    className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)] disabled:opacity-60"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={6}
                                    required
                                    disabled={status === "submitting"}
                                    className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)] resize-none disabled:opacity-60"
                                />

                                {/* optional honeypot to reduce spam */}
                                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    class="buttonpro"
                                >
                                    <span>{status === "submitting" ? "Sending..." : "Submit"}</span>
                                </button>

                                {status === "error" && (
                                    <p className="text-red-400 text-sm" aria-live="assertive">
                                        {errorMsg}
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
