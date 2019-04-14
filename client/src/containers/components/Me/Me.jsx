import React, { Component } from 'react';
import './Me.css';
import Header from '../Header/Header';
import avatar from './kevin.png';

class Me extends Component {
  render() {
    return (
        <div className='profile'>
          <div className='profile__avatar'>
            <img src={avatar}/>
            <h2>Kevin Alcoer</h2>
            <button className='profile__points'>988</button>
          </div>
          <div class='profile__campaigns'>
            <h2>Current Campaigns</h2>
            <div className='profile__campaign'>
              <div className='profile__campaign-info'>
                <div className='profile__campaign-date'><p>Apr <br/>23</p></div>
                <div className='profile__campaign-body'>
                    <h3>Baby Treasure</h3>
                    <p>AHP Recycle</p>
                    <p>1931 22nd St., Santa Monica</p>
                </div>
                <div className='profile__campaign-dist'><p>0.3 mi</p></div>
              </div>
              <div className='profile__tracker'>
                <ul className='track'>
                  <li className='ptracker__cube seven'></li>
                  <li className='ptracker__cube seven'></li>
                  <li className='ptracker__cube seven'></li>
                  <li className='ptracker__cube seven'></li>
                  <li className='ptracker__cube seven'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                </ul>
              </div>
            </div>
            <div className='profile__campaign'>
              <div className='profile__campaign-info'>
                <div className='profile__campaign-date'><p>Feb<br/> 16</p></div>
                <div className='profile__campaign-body'>
                    <h3>Water Bottles</h3>
                    <p>Plastic Recycle</p>
                    <p>1931 22nd St., Santa Monica</p>
                </div>
                <div className='profile__campaign-dist'><p>0.3 mi</p></div>
              </div>
              <div className='profile__tracker'>
                <ul className='track'>
                  <li className='ptracker__cube five'></li>
                  <li className='ptracker__cube five'></li>
                  <li className='ptracker__cube five'></li>
                  <li className='ptracker__cube five'></li>
                  <li className='ptracker__cube five'></li>
                  <li className='ptracker__cube five'></li>
                  <li className='ptracker__cube five'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                </ul>
              </div>
            </div>
            <div className='profile__campaign'>
              <div className='profile__campaign-info'>
                <div className='profile__campaign-date'><p>Feb <br/>12</p></div>
                <div className='profile__campaign-body'>
                    <h3>Can Collection</h3>
                    <p>Metal Recycle</p>
                    <p>1931 22nd St., Santa Monica</p>
                </div>
                <div className='profile__campaign-dist'><p>0.3 mi</p></div>
              </div>
              <div className='profile__tracker'>
                <ul className='track'>
                  <li className='ptracker__cube four'></li>
                  <li className='ptracker__cube four'></li>
                  <li className='ptracker__cube four'></li>
                  <li className='ptracker__cube four'></li>
                  <li className='ptracker__cube four'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                  <li className='ptracker__cube'></li>
                  <li className='pptracker__cube'></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='profile__badges'>
            <h2>My Badges</h2>
            <div className='badges'>
              <div className='badge'>
                <div className='badge__points one'>3</div>
                <p className='badge__type'>PAPER</p>
              </div>
              <div className='badge'>
                <div className='badge__points two'>3</div>
                <p className='badge__type'>PLASTIC</p>
              </div>
              <div className='badge'>
                <div className='badge__points three'>3</div>
                <p className='badge__type'>FIBRIC</p>
              </div>
              <div className='badge'>
                <div className='badge__points four'>3</div>
                <p className='badge__type'>METAL</p>
              </div>
              <div className='badge'>
                <div className='badge__points five'>3</div>
                <p className='badge__type'>GLASS</p>
              </div>
              <div className='badge'>
                <div className='badge__points six'>3</div>
                <p className='badge__type'>COMPOST</p>
              </div>
              <div className='badge'>
                <div className='badge__points seven'>3</div>
                <p className='badge__type'>AHP</p>
              </div>
              <div className='badge'>
                <div className='badge__points eight'>3</div>
                <p className='badge__type'>BATTERY</p>
              </div>
            </div>
          </div>
          <Header/>
        </div>
    );
  }
}

export default Me;
