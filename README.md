# Kaala Mithra Startup Registration Page

A responsive static landing page for startup registration and business growth services.

## Run locally

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in a browser.

The registration form posts to the Formspree endpoint configured in `index.html`. Copy `.env.local` to `.env.example` and replace the placeholder values before configuring a separate backend deployment.
