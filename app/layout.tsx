import './globals.css'
import "react"
import FirebaseAppProvider from './(client-wrapped)/FirebaseAppProvider';

const firebaseConfig = {
  apiKey: "AIzaSyD6gc1ZH0NABbECKarDmrIuHixAO7uGJGs",
  authDomain: "momotabs3.firebaseapp.com",
  projectId: "momotabs3",
  storageBucket: "momotabs3.appspot.com",
  messagingSenderId: "885321852253",
  appId: "1:885321852253:web:29716bf6064bb6e122b4b4",
  measurementId: "G-TYTQT0J2EC"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          {children}
        </FirebaseAppProvider>
      </body>
    </html>
  )
}
