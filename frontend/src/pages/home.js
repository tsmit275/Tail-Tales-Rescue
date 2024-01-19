const Home = () => {
const React = require('react')

    return (
        <div>
            <img className="banner-img" src="https://media.istockphoto.com/id/1366403216/photo/german-shepherd.webp?b=1&s=170667a&w=0&k=20&c=Fmstk2OPzftZtkRiU9rA61mRaWzpK_1Y7Q-FOVqvVU4=" />
            <div className="image-tiles d-flex justify-content-center align-items-center">
                <div className="circle-image position-relative">
                    <a href="/animals/dogs"><img className="rounded-circle" src="https://d3d0lqu00lnqvz.cloudfront.net/LabradorRetriever/ChocolateLab.jpg" /></a>
                    <div className="middle">
                        <a href="/animals/dogs"><div className="text">Dogs</div></a>
                    </div>
                </div>
                <div className="circle-image position-relative">
                    <a href="/animals/cats"><img className="rounded-circle" src="https://media.istockphoto.com/id/1424070375/photo/savannah-cat-sits-on-a-pedestal-pillow-against-a-background-of-greenery.jpg?s=612x612&w=0&k=20&c=48u686oEWUSpkbfVeqQOEcimNl1u0LMEsUSrA9y_ncY=" /></a>
                    <div className="middle">
                        <a href="/animals/cats"><div className="text">Cats</div></a>
                    </div>
                </div>
                <div className="circle-image position-relative">
                    <img className="rounded-circle" src="https://www.worldanimalprotection.us/sites/default/files/styles/600x400/public/media/GettyImages-171152147_0.jpg?h=2a7d4302&itok=Qlo1dXxe" />
                    <div className="middle">
                        <div className="text">Exotics</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
