import styles from './Die.module.css'

export function Die({value, isLocked, lockHandler}) {

    const dieFaces = {

        1: "⚀",
        2: "⚁",
        3: "⚂",
        4: "⚃",
        5: '⚄',
        6: "⚅"
    }
    
    return (        
        <article onClick={lockHandler} className={ isLocked ? styles.locked : ''}>
            { dieFaces[value] }
        </article>
    )
}

// Comment to add some text for PR and code review

// Here's some changes after the PR and CR.