import './ArtistPageTaps.css';
import Nav from 'react-bootstrap/Nav';

export default function ArtistPageTaps({
  title1,
  title2,
  title3,
  title4,
  tab1,
  tab2,
  tab3,
  tab4,
  number1,
  number2,
  number3
}) {
  return (
    <div className='hn-sectionTabs'>
      <div className="hn-tabs">
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className='hn-border'>
              <div className={tab1}>
                <div className='hn-number'>
                  <p className='hn-creat'>{title1}</p>
                  <span className={number1}><p>302</p></span>
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <div className={tab2}>
                <div className='hn-number'>
                  <p className='hn-owned'>{title2}</p>
                  <span className={number2}><p>67</p></span>
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <div className={tab3}>
                <div className='hn-number'>
                  <p className='hn-collection'>{title3}</p>
                  <span className={number3}><p>4</p></span>
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <div className={tab4}>
                <div className='hn-number'>
                  <p className='hn-allTime'>{title4}</p>
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}