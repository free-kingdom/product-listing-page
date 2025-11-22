import styles from './Content.module.css'

export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    )
}