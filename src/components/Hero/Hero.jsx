import './Hero.scss'
import Navbar from '../../components/Navbar';

import circle__left from '../../assets/images/home/circle__left.png'
import circle__right from '../../assets/images/home/circle__right.png'
import kostya from '../../assets/images/home/kostya.png'
import SvgBitcoin from '../Svgs';

export const Hero = () => {
    return (
        <div id="/#self" className="hero">
            <div className="container">
       

                <div className="circle__left">
                    <img src={circle__left} alt="svg"></img>
                </div>

                <div className="circle__right">
                    <img src={circle__right} alt="svg"></img>
                </div>

                <div className="hero__discount d-flex justify-between align-center">
                    <p className='hero__15'>    15% СКИДКА  </p>
                    <p className='hero__bot'>
                        На Бот для автоматизации P2P-трейдинга
                        всем участникам клуба Satoshkin  </p>

                </div>
                <div className="hero__content grid grid__col-6">

                <div className="hero__right2 d-flex flex-column align-left">
                        <div className="hero__img">
                            <img src={kostya} alt='kostya'></img>
                         
                        </div>
                        <div className="hero__line1"></div>
                            <div className="hero__line2"></div>
                  
                    </div>
                    <div className="hero__left d-flex flex-column align-left">
                        <h1 className="hero__title">ПЕРСОНАЛЬНЫЙ НАСТАВНИК ПО КРИПТОВАЛЮТЕ И P2P</h1>
                        <p className='hero__desc'>Специалист в области криптовалюты и P2P-трейдинга,
                            эксперт курса “Satoshkin”, куратор обучения в “Академии Гарантекс”.</p>
                        <button className='hero__subscribe'>Записаться на консультацию</button>
                    </div>
                    <div className="hero__right d-flex flex-column align-left">
                        <div className="hero__img">
                            <img src={kostya} alt='kostya'></img>
                         
                        </div>
                        <div className="hero__line1"></div>
                            <div className="hero__line2"></div>
                        <SvgBitcoin></SvgBitcoin>
                    </div>
                </div>

             



            </div>
            <div className="hero__about about grid grid__col-4">
                <div className="hero__about1  d-flex">
                    <div className='divforsvg'>
                        <svg className='small' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 31H3C2.46957 31 1.96086 30.7893 1.58579 30.4142C1.21071 30.0391 1 29.5304 1 29V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1C2.26522 1 2.51957 1.10536 2.70711 1.29289C2.89464 1.48043 3 1.73478 3 2V29H30C30.2652 29 30.5196 29.1054 30.7071 29.2929C30.8946 29.4804 31 29.7348 31 30C31 30.2652 30.8946 30.5196 30.7071 30.7071C30.5196 30.8946 30.2652 31 30 31Z" fill="#3671E9" />
                            <path d="M9.75 27H7.25C6.65326 27 6.08097 26.7629 5.65901 26.341C5.23705 25.919 5 25.3467 5 24.75V15.25C5 14.6533 5.23705 14.081 5.65901 13.659C6.08097 13.2371 6.65326 13 7.25 13H9.75C10.3467 13 10.919 13.2371 11.341 13.659C11.7629 14.081 12 14.6533 12 15.25V24.75C12 25.3467 11.7629 25.919 11.341 26.341C10.919 26.7629 10.3467 27 9.75 27Z" fill="#3671E9" />
                            <path d="M18.75 27H16.25C15.6533 27 15.081 26.7629 14.659 26.341C14.2371 25.919 14 25.3467 14 24.75V12.25C14 11.6533 14.2371 11.081 14.659 10.659C15.081 10.2371 15.6533 10 16.25 10H18.75C19.3467 10 19.919 10.2371 20.341 10.659C20.7629 11.081 21 11.6533 21 12.25V24.75C21 25.3467 20.7629 25.919 20.341 26.341C19.919 26.7629 19.3467 27 18.75 27Z" fill="#3671E9" />
                            <path d="M27.7274 27H25.2274C24.6307 27 24.0584 26.7629 23.6364 26.341C23.2145 25.919 22.9774 25.3467 22.9774 24.75V8.25C22.9774 7.65326 23.2145 7.08097 23.6364 6.65901C24.0584 6.23705 24.6307 6 25.2274 6H27.7274C28.3242 6 28.8965 6.23705 29.3184 6.65901C29.7404 7.08097 29.9774 7.65326 29.9774 8.25V24.75C29.9774 25.3467 29.7404 25.919 29.3184 26.341C28.8965 26.7629 28.3242 27 27.7274 27Z" fill="#3671E9" />
                        </svg>
                    </div>



                    <div className="about__Right">
                        <h2 className='about__title'>Более 250 BTC</h2>
                        <p className='about__desc'>Оборот по сделкам суммарно</p>
                    </div>

                </div>

                <div className="hero__about1  d-flex">
                    <div className='divforsvg'>
                        <svg className='small' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.9875 5.04531C24.4672 3.40391 22.3438 2.5 20 2.5C17.6438 2.5 15.5133 3.39844 14 5.02969C12.4703 6.67891 11.725 8.92031 11.9 11.3406C12.2469 16.1156 15.8805 20 20 20C24.1195 20 27.7469 16.1164 28.0992 11.3422C28.2766 8.94375 27.5266 6.70703 25.9875 5.04531Z" fill="#3671E9" />
                            <path d="M33.7499 37.5H6.2499C5.88995 37.5047 5.53348 37.4291 5.20643 37.2786C4.87938 37.1282 4.58998 36.9068 4.35927 36.6305C3.85146 36.0234 3.64677 35.1945 3.79834 34.3562C4.45771 30.6984 6.51552 27.6258 9.7499 25.4687C12.6233 23.5539 16.2632 22.5 19.9999 22.5C23.7366 22.5 27.3765 23.5547 30.2499 25.4687C33.4843 27.625 35.5421 30.6977 36.2015 34.3555C36.353 35.1937 36.1483 36.0227 35.6405 36.6297C35.4099 36.9062 35.1205 37.1277 34.7935 37.2783C34.4664 37.4288 34.1099 37.5046 33.7499 37.5Z" fill="#3671E9" />
                        </svg>

                    </div>



                    <div className="about__Right">
                        <h2 className='about__title'>Около 5 лет</h2>
                        <p className='about__desc'>Стаж работы в P2P, столько
                            же в Банковском IT-отделе тестирования</p>
                    </div>

                </div>


                <div className="hero__about1  d-flex">
                    <div className='divforsvg'>
                        <svg className='small' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.3743 7.63643C30.7522 5.99828 28.8224 4.69677 26.6958 3.80668C24.5692 2.91659 22.2877 2.45546 19.9823 2.44979C17.6769 2.44412 15.3931 2.89401 13.2621 3.77362C11.1312 4.65323 9.19499 5.94522 7.56484 7.57537C5.93469 9.20552 4.6427 11.1417 3.76309 13.2727C2.88348 15.4037 2.43359 17.6874 2.43926 19.9928C2.44494 22.2982 2.90606 24.5797 3.79615 26.7063C4.68624 28.833 5.98775 30.7628 7.6259 32.3849C9.24801 34.023 11.1778 35.3245 13.3044 36.2146C15.4311 37.1047 17.7126 37.5658 20.018 37.5715C22.3233 37.5772 24.6071 37.1273 26.7381 36.2477C28.8691 35.3681 30.8052 34.0761 32.4354 32.4459C34.0655 30.8158 35.3575 28.8796 36.2371 26.7486C37.1168 24.6177 37.5667 22.3339 37.561 20.0285C37.5553 17.7231 37.0942 15.4416 36.2041 13.315C35.314 11.1883 34.0125 9.25854 32.3743 7.63643ZM5.00012 20.0107C4.99956 18.6831 5.17558 17.3613 5.52356 16.0802C6.097 17.3146 6.92981 18.381 7.49621 19.6474C8.22824 21.2755 10.1939 20.8239 11.0618 22.2505C11.8322 23.5169 11.0095 25.1185 11.5861 26.4435C12.0048 27.4052 12.9923 27.6153 13.6736 28.3185C14.3697 29.0278 14.3548 29.9997 14.4611 30.9247C14.581 32.0115 14.7754 33.0888 15.0431 34.1489C15.0431 34.1568 15.0431 34.1653 15.0493 34.1732C9.20325 32.12 5.00012 26.5474 5.00012 20.0107ZM20.0001 35.0107C19.1624 35.0104 18.3262 34.9404 17.5001 34.8013C17.5087 34.5896 17.5126 34.3919 17.5337 34.2544C17.7236 33.0122 18.3454 31.7974 19.1845 30.8677C20.0134 29.9505 21.1493 29.3302 21.8493 28.2896C22.5353 27.2739 22.7407 25.9068 22.4579 24.72C22.0415 22.9669 19.6595 22.3817 18.3751 21.431C17.6368 20.8841 16.9798 20.0388 16.0103 19.97C15.5634 19.9388 15.1892 20.0349 14.7462 19.9208C14.34 19.8153 14.0212 19.5966 13.5884 19.6536C12.7798 19.7599 12.2697 20.6239 11.4009 20.5068C10.5767 20.3966 9.72746 19.4317 9.53996 18.6466C9.29934 17.6372 10.0978 17.3099 10.9532 17.22C11.3103 17.1825 11.7111 17.1419 12.054 17.2732C12.5056 17.4403 12.7189 17.8825 13.1243 18.106C13.8845 18.5232 14.0384 17.8567 13.922 17.1817C13.7478 16.1708 13.5447 15.7591 14.4462 15.063C15.0712 14.5833 15.6056 14.2364 15.5056 13.3747C15.4462 12.8685 15.1689 12.6396 15.4275 12.1357C15.6236 11.7521 16.1618 11.406 16.5126 11.1771C17.4181 10.5864 20.3915 10.6302 19.1767 8.97706C18.8197 8.4919 18.1611 7.62471 17.5361 7.50596C16.7548 7.35831 16.4079 8.23018 15.8634 8.61456C15.3009 9.01221 14.2056 9.46378 13.6423 8.84893C12.8845 8.02159 14.1447 7.7505 14.4236 7.17237C14.5525 6.90284 14.4236 6.52862 14.2064 6.17628C14.4881 6.05753 14.7746 5.94737 15.0657 5.84581C15.2482 5.98057 15.4647 6.06174 15.6907 6.08018C16.2134 6.11456 16.7064 5.83174 17.1626 6.18799C17.6689 6.57862 18.0337 7.07237 18.7056 7.19424C19.3556 7.31221 20.0439 6.93331 20.2048 6.26768C20.3025 5.86299 20.2048 5.43565 20.1111 5.01768C23.0329 5.03449 25.8855 5.90954 28.3142 7.53409C28.1579 7.47471 27.9712 7.48175 27.7407 7.58878C27.2665 7.80909 26.5947 8.37003 26.5392 8.92628C26.4759 9.55753 27.4071 9.64659 27.8493 9.64659C28.5134 9.64659 29.1861 9.34971 28.972 8.58253C28.879 8.24971 28.7525 7.90362 28.5486 7.69425C29.0387 8.03437 29.5083 8.40324 29.9548 8.79893C29.9478 8.80596 29.9407 8.81221 29.9337 8.82003C29.4837 9.28878 28.9611 9.65987 28.6532 10.2302C28.4361 10.6317 28.1915 10.8224 27.7517 10.9263C27.5095 10.9833 27.2329 11.0044 27.0298 11.1669C26.4642 11.6122 26.7861 12.6825 27.322 13.0036C27.9993 13.4091 29.004 13.2185 29.515 12.6396C29.9142 12.1864 30.1493 11.3997 30.8673 11.4005C31.1834 11.3998 31.487 11.5236 31.7126 11.745C32.0095 12.0528 31.9509 12.3403 32.0142 12.7247C32.1259 13.4075 32.7282 13.0372 33.0946 12.6927C33.3617 13.168 33.6027 13.6575 33.8165 14.1591C33.4134 14.7396 33.0931 15.3724 32.1236 14.6958C31.5431 14.2903 31.1861 13.7021 30.4571 13.5192C29.8204 13.363 29.1681 13.5255 28.5392 13.6341C27.8243 13.7583 26.9767 13.813 26.4345 14.3544C25.9103 14.8763 25.6329 15.5747 25.0751 16.0989C23.9962 17.1146 23.5407 18.2232 24.2392 19.6591C24.9111 21.0396 26.3165 21.7888 27.8329 21.6903C29.3228 21.5911 30.8704 20.7271 30.8275 22.8919C30.8118 23.6583 30.972 24.1888 31.2071 24.9005C31.4251 25.5568 31.4103 26.1927 31.4603 26.87C31.5078 27.6632 31.6318 28.4499 31.8306 29.2193C30.4303 31.0222 28.6364 32.4813 26.586 33.485C24.5357 34.4887 22.283 35.0106 20.0001 35.0107Z" fill="#3671E9" />
                        </svg>

                    </div>



                    <div className="about__Right">
                        <h2 className='about__title'>Более 5000+</h2>
                        <p className='about__desc'>Было совершено сделок</p>
                    </div>

                </div>

            </div>

        </div>
    );
};
