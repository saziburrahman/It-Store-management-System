
function employeeName(p) {
    const searchResults = document.getElementById("employeeNameResult");
    const match = p.value.match(/^[a-zA-Z]*/);
    const match2 = p.value.match(/\s*/);
    if (match2[0] === p.value) {
        searchResults.innerHTML = '';
        return;
    }
    if (match[0] === p.value) {
        fetch('getEmployeeName', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payload: p.value })
        }).then(res => res.json()).then(data => {
            let payload = data.payload;
            searchResults.innerHTML = '';
            if (payload.length < 1) {
                searchResults.innerHTML = "<li>Sorry Nothing Found</li>";
                return;
            }
            payload.forEach((item, index) => {
                if (index > 0) searchResults.innerHTML += '<hr>';
                searchResults.innerHTML += `<li class="list-group-item cursor" id= ${item._id}>${item.employeeName}</li>`
            });
            const list = searchResults.querySelectorAll("li");
            list.forEach((e) => {
                e.addEventListener("click", () => {
                    document.getElementById("allocateUserName").value = e.textContent;
                    document.getElementById("employeeID").value = e.getAttribute("id");
                    searchResults.innerHTML = '';
                })
            })
        });
        return;
    }
}

function productName(e) {
    const searchResults = document.getElementById("productNameResult");
    const match = e.value.match(/^[a-zA-Z]*/);
    const match2 = e.value.match(/\s*/);
    if (match2[0] === e.value) {
        searchResults.innerHTML = '';
        return;
    }
    if (match[0] === e.value) {
        fetch('getProductName', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payload: e.value })
        }).then(res => res.json()).then(data => {
            let payload = data.payload;
            searchResults.innerHTML = '';
            if (payload.length < 1) {
                searchResults.innerHTML = "<li>Sorry Nothing Found</li>";
                return;
            }
            payload.forEach((item, index) => {
                if (index > 0) searchResults.innerHTML += '<hr>';
                searchResults.innerHTML += `<li class="list-group-item cursor" id= ${item._id}>${item.productCategory}</li>`
            });
            const list = searchResults.querySelectorAll("li");
            list.forEach((e) => {
                e.addEventListener("click", () => {
                    document.getElementById("allocateProductName").value = e.textContent;
                    document.getElementById("productId").value = e.getAttribute("id");
                    searchResults.innerHTML = '';
                })
            })
        });
        return;
    }
}