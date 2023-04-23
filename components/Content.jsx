import React from 'react'

export default function Content(props) {
  return (
    <div className="py-5 service-14">
    <div className="container">
        <h2 className='text-center mb-5'>{props.title}</h2>
        <div className="row">
            <div className="col-lg-4">
								<span className="badge badge-info rounded-pill px-3 py-1 font-weight-light">Service 14</span>
                <h3 className="my-3">Awesome with Extra Ordinary Flexibility</h3>
                <p>You can relay on our amazing features list and also our customer services will be great experience for our users</p>
                <p>You will surely fall in love with ready touse bootstrap ui kit framework.</p>
								{/* <a className="btn btn-info-gradiant border-0 text-white btn-md my-3">View Details</a> */}
            </div>
            <div className="col-lg-4">
                <div className="mb-4 mb-sm-0">
                    <img className="rounded img-fluid" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature2/market.jpg" alt="wrappixel kit" />
                    <div className="mt-3">
                        <h6 className="font-weight-medium">Retargeting Market</h6>
                        <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                        {/* <a href="javascript:void(0)" className="linking">Learn More</a> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="mb-4 mb-sm-0">
                    <img className="rounded img-fluid" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature2/fruit.jpg" alt="wrappixel kit" />
                    <div className="mt-3">
                        <h6 className="font-weight-medium">Fruitful Results</h6>
                        <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
                        {/* <a href="javascript:void(0)" className="linking">Learn More</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
