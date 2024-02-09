import React from 'react';
import { MDBCol, MDBRow, MDBMask } from 'mdbreact';

import FittedImage from 'react-fitted-image';

import InnerPageFrame from '../common/InnerPageFrame';

import Global_Suvin from './Global_Suvin.jpg';
import AU from './AU.png';
import CN from './CN.png';
import TW from './TW.png';
import TL from './TL.png';
import USA from './USA.png';

export default function Global_Network() {
  return (
    <InnerPageFrame title="Global Network" subtitle={['Global Network']}>
      <div className="h2 py-2">Global Network</div>

      <div>
        <div className="h4 border-top border-light pt-5 pb-1">
          Affiliation of Global Business Partners
        </div>

        <MDBRow className="pt-3 ">
          <MDBCol
            size="12"
            lg="8"
            className="pr-lg-0"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <FittedImage
              fit="cover"
              src={Global_Suvin}
              style={{ objectPosition: 'center' }}
            />
          </MDBCol>
          <MDBCol size="12" lg="4" className="pl-lg-0">
            <MDBMask
              className="flex-center pl-4"
              pattern={5}
              overlay="red-strong"
              style={{
                backgroundColor: '#7f304e',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                className="h2 font-weight-bold w-100"
                style={{ color: '#bbbbbb' }}
              >
                GLOBAL
              </div>
              <div
                className="h1 font-weight-bolder w-100"
                style={{ color: '#dddddd' }}
              >
                SUVIN <span className="showing__cosmetic">COSMETIC</span>
              </div>
            </MDBMask>
          </MDBCol>
        </MDBRow>

        <div className="pt-2 pb-5" style={{ fontSize: '23px' }}>
          New global partners will be welcome to Suvin Cosmetic
        </div>
      </div>

      <div>
        <div className="h4 border-top border-light pt-5 pb-1">
          Main Business Partners
        </div>

        <MDBRow className="pt-3">
          <MDBCol size="12" lg="6" className="pb-4">
            <div
              className="border border-light"
              style={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="p-3"
                style={{
                  flex: '1',
                  backgroundImage: `url(${AU})`,
                  backgroundSize: 'auto 45px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right bottom',
                }}
              >
                <div>
                  <b style={{ fontWeight: '600' }}>Suvin Australia : </b> (Hung
                  Pin Chao.)
                </div>
                <div style={{ display: 'flex' }}>
                  <b
                    className=""
                    style={{ fontWeight: '600', whiteSpace: 'nowrap' }}
                  >
                    Address :&nbsp;
                  </b>
                  <span>
                    14/2-4 BYER Street Enfield 2136 NSW Sydney Australia.
                  </span>
                </div>
              </div>
              <div
                className="pr-2"
                style={{
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: '#4e4e4e',
                  color: 'white',
                }}
              >
                AUSTRALIA (호주)
              </div>
            </div>
          </MDBCol>
          <MDBCol size="12" lg="6" className="pb-4">
            <div
              className="border border-light"
              style={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="p-3"
                style={{
                  flex: '1',
                  backgroundImage: `url(${TW})`,
                  backgroundSize: 'auto 45px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right bottom',
                }}
              >
                <div>
                  <b style={{ fontWeight: '600' }}>Suvin Taiwan : </b> (楊書昊)
                </div>
                <div style={{ display: 'flex' }}>
                  <b
                    className=""
                    style={{ fontWeight: '600', whiteSpace: 'nowrap' }}
                  >
                    Address :&nbsp;
                  </b>
                  <span>中華民國台灣省新竹縣竹北市復興六路四十八號十三樓</span>
                </div>
              </div>
              <div
                className="pr-2"
                style={{
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: '#4e4e4e',
                  color: 'white',
                }}
              >
                TAIWAN (대만)
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol size="12" lg="6" className="pb-4">
            <div
              className="border border-light"
              style={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="p-3"
                style={{
                  flex: '1',
                  backgroundImage: `url(${CN})`,
                  backgroundSize: 'auto 45px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right bottom',
                }}
              >
                <b style={{ fontWeight: '600' }}>
                  Bejing Lanhan Technology Co., Ltd.
                </b>
                <div style={{ display: 'flex' }}>
                  <b
                    className=""
                    style={{ fontWeight: '600', whiteSpace: 'nowrap' }}
                  >
                    Address :&nbsp;
                  </b>
                  <span>
                    1-28-1701, Bd. 1, No43 Xizhimen North Av., Haidian District,
                    Beijing, China
                  </span>
                </div>
              </div>
              <div
                className="pr-2"
                style={{
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: '#4e4e4e',
                  color: 'white',
                }}
              >
                CHINA (중국)
              </div>
            </div>
          </MDBCol>
          <MDBCol size="12" lg="6" className="pb-4">
            <div
              className="border border-light"
              style={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="p-3"
                style={{
                  flex: '1',
                  backgroundImage: `url(${TL})`,
                  backgroundSize: 'auto 45px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right bottom',
                }}
              >
                <b style={{ fontWeight: '600' }}>JSM Thailand.</b>
                <div style={{ display: 'flex' }}>
                  <b
                    className=""
                    style={{ fontWeight: '600', whiteSpace: 'nowrap' }}
                  >
                    Address :&nbsp;
                  </b>
                  <span>
                    84/2 Moo. 4Patak Rd. Rawal, Muang, Phuket, Thailand
                  </span>
                </div>
              </div>
              <div
                className="pr-2"
                style={{
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: '#4e4e4e',
                  color: 'white',
                }}
              >
                THAILAND (태국)
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol size="12" lg="6">
            <div
              className="border border-light"
              style={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="p-3"
                style={{
                  flex: '1',
                  backgroundImage: `url(${USA})`,
                  backgroundSize: 'auto 45px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right bottom',
                }}
              >
                <b style={{ fontWeight: '600' }}>Suvin USA</b>
                <div style={{ display: 'flex' }}>
                  <b
                    className=""
                    style={{ fontWeight: '600', whiteSpace: 'nowrap' }}
                  >
                    Address :&nbsp;
                  </b>
                  <span>17127 Albert Ave Sandiego CA. 92127</span>
                </div>
              </div>
              <div
                className="pr-2"
                style={{
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: '#4e4e4e',
                  color: 'white',
                }}
              >
                USA (미국)
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </InnerPageFrame>
  );
}
