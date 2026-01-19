export const  ImageGallery = () => {
    const samarretes = [
        {webp: '/imgW/barsa1.webp', jpeg:'/img/barsa1.jpeg', alt: "1a Samarreta Barça"},
        {webp: '/imgW/barsa2.webp', jpeg:'/img/barsa2.jpeg', alt: "2a Samarreta Barça"},
        {webp: '/imgW/city.webp', jpeg:'/img/city.jpeg', alt: "1a Samarreta Manchester City"},
        {webp: '/imgW/españa.webp', jpeg:'/img/españa.jpeg', alt: "1a Samarreta España"},
        {webp: '/imgW/liverpool.webp', jpeg:'/img/liverpool.jpeg', alt: "1a Samarreta Liverpool"},
        {webp: '/imgW/inter.webp', jpeg:'/img/inter.jpeg', alt: "1a Samarreta Inter de Milan"},
        {webp: '/imgW/barsa3.webp', jpeg:'/img/barsa3.jpeg', alt: "3a Samarreta Barça"},
        {webp: '/imgW/united.webp', jpeg:'/img/united.jpeg', alt: "1a Samarreta Manchester United"}, 
        {webp: '/imgW/mallorca.webp', jpeg:'/img/mallorca.jpeg', alt: "1a Samarreta Mallorca"}
    ];

    return(
        <div>
            <h1 className="titolFotos">SAMARRETES FUTBOL 25/26</h1>
                <section  className="galeriaFotos">
                    {samarretes.map((img, i) => (
                        <picture key={i}>
                            <source srcSet={img.webp} type="image/webp"/>
                            <source srcSet={img.jpeg} type="image/jpeg"/>
                            <img className="img" src={img.webp} alt={img.alt} />
                            <h2 className="imgAlt">{img.alt}</h2>
                        </picture>
                    ))}
                </section>
        </div>
    );
};