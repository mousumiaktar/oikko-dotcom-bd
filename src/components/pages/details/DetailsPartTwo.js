import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import rectangle from "../../../images/details/rectangle.png"
import rectangle2 from "../../../images/details/rectangle2.png"
import rectangle3 from "../../../images/details/rectangle3.png"
import rectangle4 from "../../../images/details/rectangle4.png"
import rectangle5 from "../../../images/details/rectangle5.png"
import review1 from "../../../images/details/review1.png";
import review2 from "../../../images/details/review2.png";
import review3 from "../../../images/details/review3.png";
import review4 from "../../../images/details/review4.png";
import ReviewForm from './ReviewForm';

const DetailsPartTwo = () => {
    return (
        <div className='mt-12'>
            <h4 className='text-[#0198E9] text-xl border border-[#F1F1F1] px-4 py-2'>Producr details of LED Monitor With High Quality In The World</h4>
            <div className='bg-white pt-1 pb-8'>
                <div className='px-4'>
                    <div>
                        <h6 className='font-bold text-gray-700 mt-8'>See the best picture no matter where you sit</h6>
                    </div>
                    <div className='lg:flex items-center justify-between text-sm'>
                        <ul className='list-disc ml-8'>
                            <li>Size : M, L, XL</li>
                            <li>Product Type : Jogger</li>
                            <li>Main Material : Cotton</li>
                            <li>Gender : Male</li>
                            <li> Waist : Mid-rise</li>
                            <li>  Zip : Fly</li>
                        </ul>
                        <ul className='list-disc ml-8'>
                            <li>Zipper : Yes</li>
                            <li> Pocket : Two front and One Back Pockets.</li>
                            <li>100% Authentic Product</li>
                            <li>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</li>
                        </ul>
                    </div>
                    <hr className='mt-8 mb-5' />
                    <div>
                        <h6 className='font-bold text-gray-700 mt-4 mb-4'>Powerful intelligence for perfection</h6>
                        <p className='text-small mb-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
                        <p className='text-small'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                    </div>
                </div>
            </div>
            {/*DETAILS PART THREE*/}
            <div className='bg-white mt-4 px-4 py-8'>
                {/* REVIEW SECTION ONE START */}
                <div className='lg:flex items-center gap-8'>
                    <div className='mb-2'>
                        <p>Customer reviews</p>
                        <small className='flex items-center'>
                            <AiFillStar className='text-[#FFAD01]' />
                            <AiFillStar className='text-[#FFAD01]' />
                            <AiFillStar className='text-[#FFAD01]' />
                            <AiFillStar className='text-[#FFAD01]' />
                            <BsStarHalf className='text-[#FFAD01]' />
                            <p className='ml-2'>4.6 out of 5</p>
                        </small>
                    </div>
                    <div className='mb-2'>
                        <div className='flex items-center gap-2'>
                            <small>5 stars</small>
                            <img src={rectangle} alt="" />
                            <small>79%</small>
                        </div>
                        <div className='flex items-center gap-2'>
                            <small>4 stars</small>
                            <img src={rectangle3} alt="" />
                            <small>12%</small>
                        </div>
                        <div className='flex items-center gap-2'>
                            <small>2 stars</small>
                            <img src={rectangle2} alt="" />
                            <small>2%</small>
                        </div>
                        <div className='flex items-center gap-2'>
                            <small>2 stars</small>
                            <img src={rectangle4} alt="" />
                            <small>4%</small>
                        </div>
                        <div className='flex items-center gap-2'>
                            <small>1 stars</small>
                            <img src={rectangle5} alt="" />
                            <small>4%</small>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <button className='px-2 bg-[#0198E9] text-white rounded-sm shadow-md'><small>Write a Review</small></button>
                    </div>
                </div>

                {/* REVIEW SECTION ONE END */}

                {/* REVIEW SECTION TWO START */}
                <div>
                    <h5 className='mb-4 px-2'>Reviews (4)</h5>
                    <hr />
                    <div className='mt-4'>
                        <div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={review1} alt="" />
                                <div>
                                    <h6>Vanille</h6>
                                    <div className='lg:flex items-center gap-3'>
                                        <div className='flex gap-2'>
                                            <small>5.0</small>
                                            <small className='flex items-center'>
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                            </small>
                                        </div>
                                        <small className='text-gray-400'>1 Month Ago</small>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={review2} alt="" />
                                <div>
                                    <h6>Maduin</h6>
                                    <div className='lg:flex items-center gap-3'>
                                        <div className='flex gap-2'>
                                            <small>5.0</small>
                                            <small className='flex items-center'>
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                            </small>
                                        </div>
                                        <small className='text-gray-400'>1 Month Ago</small>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={review3} alt="" />
                                <div>
                                    <h6>Samantha</h6>
                                    <div className='lg:flex items-center gap-3'>
                                        <div className='flex gap-2'>
                                            <small>5.0</small>
                                            <small className='flex items-center'>
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                            </small>
                                        </div>
                                        <small className='text-gray-400'>1 Month Ago</small>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={review4} alt="" />
                                <div>
                                    <h6>Roveria</h6>
                                    <div className='lg:flex items-center gap-3'>
                                        <div className='flex gap-2'>
                                            <small>5.0</small>
                                            <small className='flex items-center'>
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                                <AiFillStar className='text-[#FFAD01]' />
                                            </small>
                                        </div>
                                        <small className='text-gray-400'>1 Month Ago</small>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <ReviewForm />
            </div>
        </div>
    );
};

export default DetailsPartTwo;