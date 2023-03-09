import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, { useEffect } from 'react'
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from 'firebase/storage'
import { auth } from '../service/firebase'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleLoader } from 'react-spinners'

interface DialogProps {
    onClose: any,
    onImgSelected: any
}

function AddImgDialog(props: DialogProps) {
    const [photos, setPhotos] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const router = useRouter()
    const storage = getStorage()

    function initState() {
        if (typeof window !== undefined) {
            setTimeout(() => {
                var span = window.document.getElementById('span')
                if (span !== null) {
                    span.className = 'ax'
                }
                var file = (window.document.getElementById('my-file') as HTMLInputElement)
                if (file !== null) {
                    file.onchange = function () {
                        if (file.files != null) {
                            if (auth.currentUser == null) {
                                alert('sesi anda habis, silakan login')
                                router.push('/admin/login')
                                return
                            }
                            const _file = file.files[0]
                            const storageRef = ref(storage, `kajian/${_file.name}`)

                            const img = new Image();
                            img.addEventListener('load', () => {
                                var sip = window.prompt(
                                    'masukkan ukuran gambar [panjang]x[lebar]',
                                    `${img.width}x${img.height}`)
                                alert(sip)
                                window.URL.revokeObjectURL(img.src); // Free some memory
                            });
                            img.src = window.URL.createObjectURL(_file);

                            // 'file' comes from the Blob or File API
                            // setLoading(true)
                            // uploadBytes(storageRef, _file).then(() => {
                            //     alert(`berhasil upload file ${_file.name}`)
                            //     getData()
                            // }).catch((error) => {
                            //     alert(`error ${error}`)
                            //     setLoading(false)
                            // })
                        } else {
                            alert('gagal mendapatkan file')
                        }
                    }
                }
            }, 1000)
        }
    }

    function getData() {
        setLoading(true)
        const listRef = ref(storage, 'kajian')
        listAll(listRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    console.log('folder', folderRef)
                })
                let images: string[] = []
                res.items.forEach((itemRef) => {
                    getDownloadURL(itemRef).then((x) => {
                        images.push(x)
                        const photoz: any[] = []
                        images = images.sort((n1, n2) => {
                            if (n1 > n2) return 1
                            if (n1 < n2) return -1
                            return 0;
                        })
                        for (let i = 0; i < images.length; i++) {
                            photoz.push(<ImageDialog
                                key={i}
                                onClick={() => props.onImgSelected(images[i])}
                                url={images[i]} />)
                        }
                        setPhotos(photoz)
                    })
                })
                setLoading(false)
            }).catch((error) => {
                alert(`error ${error}`)
                setLoading(false)
            })
    }

    useEffect(() => {
        initState()
        getData()
    }, [])

    const selectImg = () => {
        window.document.getElementById('my-file')?.click()
    }

    return <div className='px-3 py-3 mx-4'>
        <h3 className='text-center'>Pilih atau <span id='span' onClick={selectImg}>tambah</span> gambar baru</h3>
        <IconButton
            aria-label='close'
            onClick={props.onClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
        ><CloseIcon /></IconButton>
        <input style={{ 'visibility': 'hidden' }} type='file' name='my_file' id='my-file' />
        {loading ? <CircleLoader color='#FFFFFF' size={25} /> : photos}
    </div>
}

interface ImageProps {
    url: string
    onClick: any

}

function ImageDialog(props: ImageProps) {
    return <div className='titleED containerED' style={{
        'float': 'left',
        'border': 'border: 1px solid red',
        'cursor': 'pointer'
    }}>
        <img
            onClick={props.onClick}
            width={250} height={125}
            className='mr-2 mt-2'
            src={props.url}>
        </img>
        <i className="deleteED fa fa-trash fa-2x" aria-hidden="true"></i>
    </div>

}

export default AddImgDialog