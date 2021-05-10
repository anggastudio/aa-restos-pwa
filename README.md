# Skenario Integration Test

## Skenario Favorite Resto:

#### 1. Resto belum jadi favorite.
#### 2. Button untuk jadikan favorit resto ditampilkan
#### 3. Button favorite resto diklik oleh User.
#### 4. Resto ditambahkan ke favorit list:
    - Ternyata resto sudah jadi favorit:
        - Tidak perlu ditambahkan lagi.

    - Data film tidak memiliki ID:
        - Sistem tidak memproses penyimpanan.
        - Sistem tidak gagal.


## Skenario Batal Favorite Resto:

#### 1. Resto sudah jadi favorite.
#### 2. Button untuk batal favorit resto ditampilkan.
#### 3. Button pembatalan diklik oleh User.
#### 4. Resto dihapus dari favorite list:
     - Ternyata resto tidak ada dalam favorit list.

--------------------------------------------------------
# Skenario End To End (e2e) Test

## Skenario Favorite Resto Kosong:

#### 1. Pergi ke halaman favorite list.
#### 2. Belum ada resto favorite
#### 3. Melihat tulisan "Oops, there is no favorite Resto yet."

## Skenario jadikan resto favorite:

#### 1. ada di halaman favorite list.
#### 2. Belum ada resto favorite
#### 3. Melihat tulisan "Oops, there is no favorite Resto yet."
#### 4. Kembali ke halaman utama.
#### 5. Klik salah satu resto
#### 6. ada di halaman detail resto
#### 7. melihat button favorite
#### 8. klik button favorite
#### 9. Pergi ke halaman favorit list
#### 10. Melihat ada daftar favorit list
#### 11. Mencocokan Nama Resto yang di jadikan favorit, dan yang ada di halaman favorit

## Skenario Batal Favorite Resto:

#### 1. ada di halaman favorite list.
#### 2. Belum ada resto favorite
#### 3. Melihat tulisan "Oops, there is no favorite Resto yet."
#### 4. Kembali ke halaman utama.
#### 5. Klik salah satu resto
#### 6. ada di halaman detail resto
#### 7. melihat button favorite
#### 8. klik button favorite
#### 9. Pergi ke halaman favorit list
#### 10. Melihat ada daftar favorit list
#### 11. Mencocokan Nama Resto yang di jadikan favorit, dan yang ada di halaman favorit
#### 12. Klik judul resto untuk pergi ke halaman detail 
#### 13. Melihat tombol Unfavorite
#### 14. Klik tombol unfavorite
#### 15. Pergi ke halaman favorite list
#### 16. Melihat tulisan "Oops, there is no favorite Resto yet"
#### 17. Tidak melihat element resto satupun