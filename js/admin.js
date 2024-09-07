// ===Chuyển mục sidebar===
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Loại bỏ class "active" khỏi tất cả các mục khác
    document.querySelectorAll(".nav-link").forEach((tab) => {
      tab.classList.remove("active");
    });

    // Thêm class "active" vào mục được chọn
    this.classList.add("active");

    // Ẩn tất cả các phần tử có class "tab-content"
    document.querySelectorAll(".tab-content").forEach((tab) => {
      tab.classList.remove("active");
    });
    document.getElementById("welcome").classList.remove("active");
    // Hiển thị phần tử được chọn
    const targetId = this.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});

// ===Quản lý thành viên===
document
  .getElementById("add-member-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const member_id = document.getElementById("member_id").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const role = document.getElementById("role").value;
    const status = document.getElementById("status").value;
    const image = document.getElementById("image").files[0];
    const imageUrl = URL.createObjectURL(image);

    const listItem = document.createElement("tr");
    listItem.innerHTML = `
        <td>${member_id}</td>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${role}</td>
        <td>${status}</td>
        <td><img src="${imageUrl}" alt="Hình ảnh thành viên" width="50" height="50"></td>
        <td>
          <button class="btn btn-primary">Sửa</button>
          <button class="btn btn-danger">Xóa</button>
        </td>
      `;
    document.getElementById("member-list").appendChild(listItem);
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("role").value = "";
    document.getElementById("status").value = "";
    document.getElementById("image").value = "";
  });

// ===Quản lý tài chính===
document
  .getElementById("add-finance-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const finance_id = document.getElementById("finance_id").value;
    const finance_name = document.getElementById("finance_name").value;
    const finance_type = document.getElementById("finance_type").value;
    const finance_amount = document.getElementById("finance_amount").value;
    const finance_date = document.getElementById("finance_date").value;
    const finance_description = document.getElementById(
      "finance_description"
    ).value;
    const finance_image = document.getElementById("finance_image").files[0];
    const finance_imageUrl = URL.createObjectURL(finance_image);

    const listItem = document.createElement("tr");
    listItem.innerHTML = `
        <td>${finance_id}</td>
        <td>${finance_name}</td>
        <td>${finance_type}</td>
        <td>${finance_amount}</td>
        <td>${finance_date}</td>  
        <td>${finance_description}</td>
        <td><img src="${finance_imageUrl}" alt="Hình ảnh tài chính" width="50" height="50"></td>
        <td>
          <button class="btn btn-primary">Sửa</button>
          <button class="btn btn-danger">Xóa</button>
        </td>
      `;
    document.getElementById("finance-list").appendChild(listItem);
    document.getElementById("finance_id").value = "";
    document.getElementById("finance_name").value = "";
    document.getElementById("finance_type").value = "";
    document.getElementById("finance_amount").value = "";
    document.getElementById("finance_date").value = "";
    document.getElementById("finance_description").value = "";
    document.getElementById("finance_image").value = "";
  });
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove the active class from all <i> elements
      navItems.forEach((nav) => {
        const icon = nav.querySelector("i");
        if (icon) {
          icon.classList.remove("active");
        }
      });

      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.add("active");
      }
    });
  });
});
