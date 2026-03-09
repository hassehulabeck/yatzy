import styles from './Die.module.css'

export function Die({value, isLocked, clickHandler}) {

    const dieFaces = {

        1: "⚀",
        2: "⚁",
        3: "⚂",
        4: "⚃",
        5: '⚄',
        6: "⚅"
    }
    
    if (isLocked){
        return (
            <article className={styles.locked}>
                { dieFaces[value] }
            </article>
        )
    }   
    return (        
        <article onClick={clickHandler}>
            { dieFaces[value] }
        </article>
    )
}