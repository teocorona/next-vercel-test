

interface Props {
    children: React.ReactNode
}

export const DarkLayout = ({ children }: Props) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '5px',
        }}>
            <h3>Dark</h3>
            <div>
                {children}
            </div>

        </div>
    )
}
