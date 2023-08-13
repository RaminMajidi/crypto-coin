import swal, { SweetAlertIcon } from "sweetalert2";

export const Alert = (title: string, text: string, icon: SweetAlertIcon) => {
    swal.fire({
        icon,
        title,
        text,
    });
}

export const Confirm = (title: string, text: string) => {
    return swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: 'var(--bs-red)',
        cancelButtonColor: 'var(--bs-blue)',
    })
}