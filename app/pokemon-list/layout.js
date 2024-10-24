export const metadata={
    title: "lista pokemonow",
    description: "lista pokemonow",
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
        >
        <div><p style={{color: 'red', textAlign: 'center'}}>To jest lista pokemonow</p></div>

        {children}
        </body>
        </html>
    );
}