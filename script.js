 function validateAndSubmit(event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value.trim();
            let age = document.getElementById("age").value.trim();
            
            if (!name || !age) {
                alert("Both fields are required.");
                return;
            }
            
            age = Number(age);
            
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    age > 18 ? resolve() : reject();
                }, 4000);
            })
            .then(() => alert(`Welcome, ${name}. You can vote.`))
            .catch(() => alert(`Oh sorry ${name}. You aren't old enough.`));
        }