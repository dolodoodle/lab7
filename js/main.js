let image = document.getElementById('image');

    
    fetch("https://cataas.com/cat")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            image.src = data.message
    });
    
     
    catch(err) {
        console.log("Oop", err)
    };

    const container = document.querySelector("#container");

    fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => response.json())
    .then(data => {
        console.log(data.facts)
    });

    catch(err) {
        console.log("Oof", err)
    };
});
