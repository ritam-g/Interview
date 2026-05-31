import { memo } from 'react'

const Child = () => {
    console.log('hey i am child')
    return (
        <div>
            hwy i am child
        </div>
    )
}

export default memo(Child)
