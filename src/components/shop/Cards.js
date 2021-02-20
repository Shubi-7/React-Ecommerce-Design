import React from 'react'
import Multi_grid from './Multi_grid';
import '../../cards.css'

function Cards() {
    return (
        <div className="container-box1">
        <div className="row-1">
          <Multi_grid
            title="What is Lorem Ipsum?"
            images="../images/batman.png"
            old_price="9,999"
            newPrice="9999"
            rupess="$"
            alt="batman"
            exp_date="25-10-2020"
          />
          <Multi_grid
            title="What is Lorem Ipsum?"
            images="../images/blackpanter.png"
            old_price="599"
            newPrice="500"
            rupess="&#x20B9;"
            alt="blackpanter"
            exp_date="25-10-2020"
          />
          <Multi_grid
            title="What is Lorem Ipsum?"
            images="../images/arthur.png"
            old_price="7999"
            newPrice="7000"
            rupess="$"
            alt="arthur"
            exp_date="25-10-2020"
          />
          <Multi_grid
            title="What is Lorem Ipsum?"
            images="../images/kashima.png"
            old_price="999"
            newPrice="500"
            rupess="$"
            alt="kashima"
            exp_date="25-10-2020"
          />
        </div>
      </div>
    )
}

export default Cards
