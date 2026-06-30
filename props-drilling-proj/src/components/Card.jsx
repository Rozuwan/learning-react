// import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = () => {
  return (
    <div className='card-container'>
        
      <div className="top">
        <img src="https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png" alt="" />
        <button>Save <Bookmark /> </button>
      </div>

      <div className="center">
        <h3>Amazon</h3>
        <h2>Senior UI/UX Designer</h2>
        <div className='center-detail'>
            <h4>Part time</h4>
            <h4>Senior Level </h4>
        </div>
      </div>
     
      <div className="bottom">
            <div>
                <h4>$120/hr</h4>
                <h4>SanFrancisco,CA</h4>
            </div>
        <div>
            <button>Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default Card
