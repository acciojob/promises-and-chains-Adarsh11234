 document.getElementById("userForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            
            if (!name || !age) {
                alert("Please fill out both fields.");
                return;
            }
            
            age = parseInt(age);
            
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000);
            })
            .then(message => alert(message))
            .catch(error => alert(error));
        });