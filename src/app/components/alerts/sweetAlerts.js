import Swal from "sweetalert2";
export const Toast = (message, icon) => {
  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 5000,
    // didOpen: (toast) => {
    //     toast.onmouseenter = Swal.stopTimer;
    //     toast.onmouseleave = Swal.resumeTimer;
    // }
  });

  toast.fire({
    icon: icon,
    title: message,
  });
};

export const alertSuccess = (message) =>
  Swal.fire({
    title: message,
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });
