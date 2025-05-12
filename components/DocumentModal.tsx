import Image from 'next/image';
     import { X } from 'lucide-react';

     interface DocumentModalProps {
       document: { id: number; title: string; description: string; date: string; imageUrl: string };
       onClose: () => void;
     }

     const DocumentModal = ({ document, onClose }: DocumentModalProps) => {
       return (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
           <div
             className="relative w-full max-w-4xl h-[90vh] flex flex-col items-center justify-center"
             onClick={(e) => e.stopPropagation()}
           >
             <button
               onClick={onClose}
               className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md z-50 cursor-pointer"
               aria-label="Закрыть модальное окно"
             >
               <X size={24} color="#2A632C" />
             </button>
             <div className="relative w-full h-full">
               <Image
                 src={document.imageUrl}
                 alt={`Полноэкранное изображение: ${document.title}`}
                 fill
                 className="object-contain"
               />
               <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                 <h3 className="text-xl font-semibold">{document.title}</h3>
                 <p className="text-sm mt-2">{document.description}</p>
                 <span className="text-sm block mt-1">{document.date}</span>
               </div>
             </div>
           </div>
         </div>
       );
     };

     export default DocumentModal;