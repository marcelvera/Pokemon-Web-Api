import React from 'react'

const styles = {
  stBut : 'bg-blue-600 text-gray-50 font-semibold rounded-2xl hover:bg-blue-400 hover:text-blue-600 w-30 h-10 cursor-pointer relative'
}

const Buttom1 = (props) => {
  return (
    <button className={styles.stBut}>{props.title}</button>
  )
}

export default Buttom1