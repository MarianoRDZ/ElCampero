'use client';

import Image from 'next/image';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectCartItems,
  selectCartIsOpen,
  selectCartTotalPrice,
  closeCart,
  removeItem,
  updateQuantity,
} from '@/features/cart/cartSlice';

export function CartDrawer() {
  const dispatch  = useAppDispatch();
  const isOpen    = useAppSelector(selectCartIsOpen);
  const items     = useAppSelector(selectCartItems);
  const total     = useAppSelector(selectCartTotalPrice);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => dispatch(closeCart())}
        className={cn(
          'fixed inset-0 z-50 bg-on-surface/40 transition-opacity duration-300 ease-out',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-label="Tu carrito"
        aria-modal="true"
        className={cn(
          'fixed inset-y-0 right-0 z-60 flex w-full max-w-md flex-col bg-surface shadow-popover',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant px-8 py-6">
          <h2 className="font-serif text-headline-sm font-medium leading-headline-sm">
            Tu carrito
          </h2>
          <button
            onClick={() => dispatch(closeCart())}
            aria-label="Cerrar carrito"
            className="text-on-surface-variant transition-colors duration-300 ease-out hover:text-on-surface"
          >
            <X size={22} strokeWidth={1.5} aria-hidden />
          </button>
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-stack-md px-8 text-center">
            <ShoppingBag size={48} strokeWidth={1} className="text-outline" aria-hidden />
            <p className="font-sans text-body-lg text-on-surface-variant">
              Tu carrito está vacío
            </p>
          </div>
        ) : (
          <>
            {/* Items */}
            <ul className="flex-1 space-y-6 overflow-y-auto px-8 py-6" role="list">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-surface-container">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-sans text-body-md font-semibold text-on-surface">
                        {item.name}
                      </p>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        aria-label={`Eliminar ${item.name}`}
                        className="shrink-0 text-outline transition-colors duration-300 ease-out hover:text-error"
                      >
                        <Trash2 size={16} strokeWidth={1.5} aria-hidden />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                          aria-label="Reducir cantidad"
                          disabled={item.quantity <= 1}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-outline-variant transition-colors duration-300 ease-out hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Minus size={12} strokeWidth={2} aria-hidden />
                        </button>
                        <span className="w-4 text-center font-sans text-body-md font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          aria-label="Aumentar cantidad"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-outline-variant transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                        >
                          <Plus size={12} strokeWidth={2} aria-hidden />
                        </button>
                      </div>
                      <p className="font-sans text-body-md font-semibold text-on-surface">
                        ${(item.price * item.quantity).toLocaleString('es-AR')}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="space-y-4 border-t border-outline-variant px-8 py-6">
              <div className="flex items-center justify-between">
                <p className="font-sans text-body-lg text-on-surface-variant">Total</p>
                <p className="font-serif text-headline-sm font-medium text-on-surface">
                  ${total.toLocaleString('es-AR')}
                </p>
              </div>
              <button className="w-full rounded-lg bg-primary py-4 font-sans text-label-lg font-semibold uppercase tracking-widest text-on-primary transition-opacity duration-300 ease-out hover:opacity-90">
                Ir al checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
