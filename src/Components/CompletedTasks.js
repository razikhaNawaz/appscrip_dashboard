import React from 'react'
import classes from './CompletedTasks.module.css'

const CompletedTasks = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.child1}>
        <input type="search"  placeholder='search' />
        <label>From date</label>
        <input type="date"/>
        <label>To Date</label>
        <input type="date"/>
        <button>Apply</button>
        <button>Reset</button>
        <button>Filter</button>
      </div>
      <div className={classes.child2}>
        <label>Thursday, 28th Dec 2023</label>
        <div><img src="grandma.png" alt="grandma" /></div>
        <div>
          <h1>Malenie Laurent</h1>
          <p>Appointment Id.:  324424</p>
          <p>Intake Comprehensive Assessment</p>
        </div>
        <div>
          <p>Task ID:2323232</p>
          <p>Date & Time:December 22, 2022  10:30 AM</p>
          <p>Duration:1 hour</p>
        </div>
        <div>
          <p>Status Overdue</p>
        </div>
        <div>
          <button>Start Assessment</button>
        </div>
        
      </div>
      <div className={classes.child2}>
        <label>Thursday, 28th Dec 2023</label>
        <div><img src="grandma.png" alt="grandma" /></div>
        <div>
          <h1>Malenie Laurent</h1>
          <p>Appointment Id.:  324424</p>
          <p>Intake Comprehensive Assessment</p>
        </div>
        <div>
          <p>Task ID:2323232</p>
          <p>Date & Time:December 22, 2022  10:30 AM</p>
          <p>Duration:1 hour</p>
        </div>
        <div>
          <p>Status Overdue</p>
        </div>
        <div>
          <button>Start Assessment</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default CompletedTasks;