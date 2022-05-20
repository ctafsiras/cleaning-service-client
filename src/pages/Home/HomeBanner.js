import React from 'react';
import bucketgirl from '../../assets/images/bucketgirl.png'

const HomeBanner = () => {
    return (
        <div class="hero min-h-scdreen bg-yellow-100 lg:h-[62vh]">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src={bucketgirl} class="max-w-sm rounded-lg" />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;