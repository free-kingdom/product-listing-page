export function throttle<T extends (...args: any[]) => any>(f: T, ms: number): (...args: Parameters<T>) => ReturnType<T> {    
    let last = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;  
    return (...args: Parameters<T>) => {
      const now = Date.now();
  
      if (now - last >= ms) {
        last = now;
        return f(...args);
      } else {
        if (timer) {
          clearTimeout(timer);          
        }
        return new Promise(resolve => {
            timer = setTimeout(() => {
                last = Date.now();
                resolve(f(...args));                
            }, ms - (now - last));
        })        
      }
    };
  }
  