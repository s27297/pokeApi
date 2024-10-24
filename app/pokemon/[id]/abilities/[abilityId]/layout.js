export const metadata={
    title: "ability pokemona",
    description:  "ability pokemona",
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
        >
        <div><p style={{color: 'red', textAlign: 'center'}}>To jest ability pokemona</p></div>

        {children}
        </body>
        </html>
    );
}