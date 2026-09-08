"use client";

import { BookOpen, Feather, Home, Info, LucideIcon, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface NavLink {
  id: number;
  to: string;
  label: string;
}

interface BottomNavItem {
  name: string;
  link: string;
  icon: LucideIcon;
}

interface BottomNavigationBarOSNProps {
  navLinksData: NavLink[];
}

interface PillPosition {
  x: number;
  width: number;
}

const getBottomNavItems = (navLinks: NavLink[]): BottomNavItem[] => {
  return navLinks.map((link) => {
    let iconComponent: LucideIcon = Home;

    switch (link.label) {
      case "Home":
        iconComponent = Home;
        break;

      case "About Us":
        iconComponent = Info;
        break;

      case "Our Program":
        iconComponent = BookOpen;
        break;

      case "Contact Us":
        iconComponent = Mail;
        break;

      case "Blog":
        iconComponent = Feather;
        break;

      default:
        iconComponent = Home;
    }

    return {
      name: link.label,
      link: link.to,
      icon: iconComponent,
    };
  });
};

export default function BottomNavigationBarOSN({
  navLinksData,
}: BottomNavigationBarOSNProps) {
  const pathname = usePathname();
  const router = useRouter();

  const bottomNavItems = getBottomNavItems(navLinksData);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const pointerStartXRef = useRef(0);
  const pointerStartYRef = useRef(0);

  const dragStartIndexRef = useRef(0);
  const currentDragXRef = useRef(0);

  const draggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const horizontalGestureRef = useRef(false);

  const [pill, setPill] = useState<PillPosition>({
    x: 0,
    width: 0,
  });

  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const getActiveIndex = () => {
    const index = bottomNavItems.findIndex((item) => {
      return (
        pathname === item.link ||
        (item.link !== "/" && pathname.startsWith(item.link))
      );
    });

    return index >= 0 ? index : 0;
  };

  const activeIndex = getActiveIndex();

  const updatePill = () => {
    const container = navContainerRef.current;
    const activeItem = itemRefs.current[activeIndex];

    if (!container || !activeItem) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    setPill({
      x: itemRect.left - containerRect.left,
      width: itemRect.width,
    });
  };

  useLayoutEffect(() => {
    updatePill();

    const container = navContainerRef.current;

    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updatePill();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [pathname, activeIndex, navLinksData]);

  useEffect(() => {
    currentDragXRef.current = 0;

    setDragX(0);
    setIsDragging(false);

    draggingRef.current = false;
    hasDraggedRef.current = false;
    horizontalGestureRef.current = false;
  }, [pathname]);

  useEffect(() => {
    bottomNavItems.forEach((item) => {
      router.prefetch(item.link);
    });
  }, [bottomNavItems, router]);

  const getItemWidth = () => {
    const container = navContainerRef.current;

    if (!container || bottomNavItems.length === 0) {
      return 1;
    }

    return container.clientWidth / bottomNavItems.length;
  };

  const clampDragX = (deltaX: number) => {
    const itemWidth = getItemWidth();

    const minimumX = -activeIndex * itemWidth;

    const maximumX = (bottomNavItems.length - 1 - activeIndex) * itemWidth;

    /*
      Rubber-band effect ketika ditarik melewati
      item pertama atau terakhir.
    */
    if (deltaX < minimumX) {
      return minimumX + (deltaX - minimumX) * 0.16;
    }

    if (deltaX > maximumX) {
      return maximumX + (deltaX - maximumX) * 0.16;
    }

    return deltaX;
  };

  const navigateToIndex = (index: number) => {
    const targetIndex = Math.max(0, Math.min(bottomNavItems.length - 1, index));

    const targetItem = bottomNavItems[targetIndex];

    if (!targetItem) return;

    if (targetItem.link === pathname) {
      setDragX(0);
      currentDragXRef.current = 0;
      return;
    }

    router.push(targetItem.link);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerStartXRef.current = event.clientX;
    pointerStartYRef.current = event.clientY;

    dragStartIndexRef.current = activeIndex;
    currentDragXRef.current = 0;

    draggingRef.current = true;
    hasDraggedRef.current = false;
    horizontalGestureRef.current = false;

    setDragX(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const deltaX = event.clientX - pointerStartXRef.current;
    const deltaY = event.clientY - pointerStartYRef.current;

    /*
      Tunggu beberapa pixel sebelum menentukan
      apakah gesture horizontal atau scroll vertikal.
    */
    if (!horizontalGestureRef.current) {
      if (Math.abs(deltaX) < 5 && Math.abs(deltaY) < 5) {
        return;
      }

      /*
        Kalau gerakan lebih dominan vertikal,
        biarkan browser melakukan scroll halaman.
      */
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        draggingRef.current = false;
        return;
      }

      horizontalGestureRef.current = true;
      setIsDragging(true);

      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {}
    }

    if (!horizontalGestureRef.current) return;

    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }

    const nextDragX = clampDragX(deltaX);

    currentDragXRef.current = nextDragX;
    setDragX(nextDragX);
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current && !horizontalGestureRef.current) {
      return;
    }

    draggingRef.current = false;

    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {}

    if (!horizontalGestureRef.current || !hasDraggedRef.current) {
      currentDragXRef.current = 0;
      setDragX(0);
      setIsDragging(false);

      horizontalGestureRef.current = false;

      return;
    }

    const itemWidth = getItemWidth();

    /*
      PENTING:
      Geser pill ke KANAN = pindah ke tab berikutnya.
      Geser pill ke KIRI = pindah ke tab sebelumnya.
    */
    const rawMovement = currentDragXRef.current / Math.max(itemWidth, 1);

    let targetIndex = dragStartIndexRef.current + Math.round(rawMovement);

    /*
      Swipe sekitar 18% lebar item sudah dianggap
      sebagai perpindahan satu tab.
    */
    const threshold = itemWidth * 0.18;

    if (targetIndex === dragStartIndexRef.current) {
      if (currentDragXRef.current >= threshold) {
        targetIndex = dragStartIndexRef.current + 1;
      } else if (currentDragXRef.current <= -threshold) {
        targetIndex = dragStartIndexRef.current - 1;
      }
    }

    targetIndex = Math.max(0, Math.min(bottomNavItems.length - 1, targetIndex));

    /*
      Biarkan pill melakukan spring animation
      menuju posisi target terlebih dahulu.
    */
    const targetOffset = (targetIndex - dragStartIndexRef.current) * itemWidth;

    currentDragXRef.current = targetOffset;

    setDragX(targetOffset);
    setIsDragging(false);

    horizontalGestureRef.current = false;

    if (targetIndex !== activeIndex) {
      /*
        Route benar-benar berpindah setelah swipe.
      */
      window.setTimeout(() => {
        navigateToIndex(targetIndex);
      }, 90);
    } else {
      window.setTimeout(() => {
        currentDragXRef.current = 0;
        setDragX(0);
      }, 20);
    }

    /*
      Mencegah Link menerima click yang muncul
      setelah gesture swipe.
    */
    window.setTimeout(() => {
      hasDraggedRef.current = false;
    }, 250);
  };

  const cancelDrag = () => {
    draggingRef.current = false;
    hasDraggedRef.current = false;
    horizontalGestureRef.current = false;
    currentDragXRef.current = 0;

    setIsDragging(false);
    setDragX(0);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    if (hasDraggedRef.current) {
      event.preventDefault();
      return;
    }

    if (index === activeIndex) {
      return;
    }

    /*
      Klik biasa juga terasa smooth:
      pill bergerak terlebih dahulu lalu route pindah.
    */
    event.preventDefault();

    const itemWidth = getItemWidth();
    const targetOffset = (index - activeIndex) * itemWidth;

    currentDragXRef.current = targetOffset;
    setDragX(targetOffset);

    window.setTimeout(() => {
      navigateToIndex(index);
    }, 80);
  };

  const itemWidth = getItemWidth();

  /*
    Posisi pill dalam bentuk index desimal.
    Contoh:
    Home = 0
    setengah Home -> About = 0.5
    About = 1
  */
  const visualActiveIndex = activeIndex + dragX / Math.max(itemWidth, 1);

  return (
    <nav
      className="
        fixed
        inset-x-3
        bottom-3
        z-50

        overflow-hidden

        rounded-[28px]

        border
        border-white/30

        shadow-[0_18px_46px_rgba(0,18,55,0.42),0_5px_15px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-1px_0_rgba(0,15,55,0.18)]

        backdrop-blur-[28px]
        backdrop-saturate-200

        lg:hidden
      "
      style={{
        background: [
          "linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.035) 38%, transparent 64%)",
          "radial-gradient(circle at 18% -45%, rgba(255,255,255,0.22) 0%, transparent 40%)",
          "linear-gradient(135deg, rgba(0,41,95,0.94) 0%, rgba(0,50,110,0.92) 52%, rgba(0,33,78,0.96) 100%)",
        ].join(", "),
      }}>
      {/* TOP SPECULAR */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[7%]
          top-0
          z-40

          h-px

          bg-linear-to-r
          from-transparent
          via-white/80
          to-transparent
        "
      />

      {/* GLASS REFLECTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-12%]
          top-[-75%]

          h-[125%]
          w-[55%]

          rotate-[-10deg]
          rounded-full

          bg-white/9
          blur-2xl
        "
      />

      {/* BLUE REFRACTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-10
          right-[8%]

          h-20
          w-44

          rounded-full

          bg-[#4DA3FF]/18
          blur-2xl
        "
      />

      <div
        ref={navContainerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={cancelDrag}
        className="
          relative

          mx-auto
          flex
          h-17.5
          max-w-full
          items-center

          select-none

          px-1.5

          touch-pan-y
        ">
        {/* =====================================================
            MOVABLE LIQUID GLASS PILL
        ===================================================== */}
        {pill.width > 0 && (
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-1.25
              top-1.25
              z-0

              overflow-hidden

              rounded-[21px]

              border
              border-white/50

              shadow-[0_9px_24px_rgba(0,20,60,0.20),0_2px_7px_rgba(0,0,0,0.09),inset_0_1px_0_rgba(255,255,255,0.90),inset_0_-1px_0_rgba(4,57,125,0.07)]

              backdrop-blur-xl
              backdrop-saturate-200

              will-change-transform
            "
            style={{
              width: `${pill.width}px`,

              transform: `translate3d(${pill.x + dragX}px, 0, 0)`,

              transition: isDragging
                ? "none"
                : "transform 520ms cubic-bezier(0.22, 1.25, 0.36, 1), width 420ms cubic-bezier(0.22, 1, 0.36, 1)",

              background: [
                "radial-gradient(circle at 30% 8%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.30) 34%, transparent 58%)",
                "linear-gradient(145deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.70) 48%, rgba(221,239,255,0.62) 100%)",
                "rgba(255,255,255,0.72)",
              ].join(", "),
            }}>
            {/* TOP REFLECTION */}
            <span
              aria-hidden="true"
              className="
                absolute
                left-[13%]
                right-[13%]
                top-0

                h-[42%]

                rounded-b-full

                bg-linear-to-b
                from-white/95
                via-white/35
                to-transparent
              "
            />

            {/* LOWER REFRACTION */}
            <span
              aria-hidden="true"
              className="
                absolute
                -bottom-3
                right-[5%]

                h-8
                w-[55%]

                rounded-full

                bg-[#4DA3FF]/18
                blur-xl
              "
            />

            {/* SIDE HIGHLIGHT */}
            <span
              aria-hidden="true"
              className="
                absolute
                -left-2
                top-2

                h-9
                w-5

                rotate-18
                rounded-full

                bg-white/30
                blur-md
              "
            />

            {/* INNER RIM */}
            <span
              aria-hidden="true"
              className="
                absolute
                inset-px

                rounded-[20px]

                border
                border-white/35
              "
            />
          </div>
        )}

        {/* =====================================================
            NAV ITEMS
        ===================================================== */}
        {bottomNavItems.map((item, index) => {
          const distance = Math.abs(visualActiveIndex - index);

          const proximity = Math.max(0, Math.min(1, 1 - distance));

          const isRouteActive = index === activeIndex;

          const iconScale = 1 + proximity * 0.08;
          const iconLift = proximity * -1.5;

          const activeColorStrength = proximity;

          return (
            <Link
              key={item.name}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              href={item.link}
              draggable={false}
              onClick={(event) => {
                handleNavClick(event, index);
              }}
              className="
                group
                relative
                z-10

                flex
                h-full
                min-w-0
                grow
                basis-0
                flex-col
                items-center
                justify-center

                rounded-[20px]

                px-1
                py-2

                outline-none

                focus-visible:ring-2
                focus-visible:ring-white/50
              ">
              <item.icon
                className="
                  relative
                  z-10

                  mb-1
                  h-5.25
                  w-5.25
                  shrink-0

                  will-change-transform

                  transition-[color,opacity]
                  duration-150
                "
                strokeWidth={isRouteActive || proximity > 0.5 ? 2.35 : 2}
                style={{
                  transform: `translate3d(0, ${iconLift}px, 0) scale(${iconScale})`,

                  color:
                    activeColorStrength > 0.5
                      ? "#04397D"
                      : "rgba(255,255,255,0.88)",
                }}
              />

              <span
                className="
                  relative
                  z-10

                  max-w-full
                  truncate

                  text-[10px]
                  font-semibold
                  leading-none

                  will-change-transform

                  sm:text-[11px]
                "
                style={{
                  transform: `scale(${1 + proximity * 0.035})`,

                  color:
                    activeColorStrength > 0.5
                      ? "#04397D"
                      : "rgba(255,255,255,0.82)",
                }}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
