import React from 'react'
import "./spiner.css"
function spiner() {
  return (
    <div class="d-flex justify-content-center  fullscreen">
        <span class="sr-only display-6"  >Loading...  </span>
  <div class="spinner-border text-success n m-3" role="status">
    
  </div>
  
</div>
  )
}

export default spiner