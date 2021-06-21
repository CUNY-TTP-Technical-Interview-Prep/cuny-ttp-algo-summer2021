class  MaxHeap{


    constructor(){
      this.heap = [30, 20, 10, 7, 9, 5]
    }
  
    insert(value){

        this.heap.push(value)
         this.bubbleUp()
      }
    
         bubbleUp(){
           let index =  this.heap.length-1;
    
        while( index > 0){
           let element = this.heap[index],
               parentIndex = Math.floor((index-1)/2),
               parent = this.heap[parentIndex],
    
           if(parent >= element) break
              this.heap[index] = parent;
             this.heap[parentIndex] = element;
              index = parentIndex
    
        }
      }


      extractMax(){
        let  max = this.heap[0];
        this.heap[0]= this.heap.pop()
        this.sinkDown(0)
       return max
      }

      sinkDown(index){
        let   left = 2*index+1,
              right = 2*index+2,
              largest = index;
        const length = this.heap.length
   
   
           // if left child is greater than parent
         if(left <= length &&  this.heap[left]>this.heap[largest] ){
            largest = left
          }
         // if right child is greater than parent
         if(right <= length && this.heap[right]>this.heap[largest]) {
           largest = right
         }
        // swap
        if(largest !== index){
           [this.heap[largest],this.heap[index]] =
           [this.heap[index],this.heap[largest]]
          this.sinkDown(largest)
        }
   
     }

  }

  const heap = new MaxHeap();

  console.log(heap)