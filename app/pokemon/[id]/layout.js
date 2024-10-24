export const metadata={
    title: "pokemon",
    description:  "pokemon",
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
        >
        <div><p style={{color:'red' ,textAlign:'center'}}>To jest opis pokemona</p></div>
        {children}
        </body>
        </html>
    );
}