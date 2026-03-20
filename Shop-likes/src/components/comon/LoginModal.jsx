import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { AuthContext } from '../../context/AuthContext';

const LoginModal = ({ isOpen, onClose, isClosable = true }) => {
  const { login } = useContext(AuthContext);

  if (!isOpen) return null;

  const handleSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      login(credentialResponse.credential);
      onClose();
    }
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-md w-full mx-4 border border-neutral-100 animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {isClosable && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-[#c0e067]/20 rounded-2xl mb-4">
            <span className="text-3xl">🛍️</span>
          </div>
          <h2 className="text-3xl font-[fonthero] mb-2 uppercase tracking-tighter">
            {isClosable ? "Welcome!" : " Required"}
          </h2>
          <p className="text-neutral-500 font-[fontnormal]">
            {isClosable 
              ? "Please log in to continue your premium shopping." 
              : "To proceed with payment or view exclusive products, please log in with your Google account."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            theme="filled_black"
            shape="pill"
            size="large"
            text="continue_with"
            width="100%"
          />
          {!isClosable && (
            <p className="text-red-500 text-xs font-bold mt-4 uppercase tracking-widest animate-pulse">
              Mandatory Login to Proceed
            </p>
          )}
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2">
            Secure processing by Google 
          </p>
        </div>
      </div>
      
      {/* Overlay click to close - only if closable */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={isClosable ? onClose : undefined}
      />
    </div>
  );
};

export default LoginModal;
