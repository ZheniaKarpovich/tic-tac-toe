class TicTacToe {
    constructor() {
        this.field=[];
        for(var i=0;i<3;i++)
        {
            this.field[i]=[];
        }
        this.player='x';
    }
    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if((this.getFieldValue(rowIndex,columnIndex))===null)
        {
            this.field[rowIndex][columnIndex]=this.player;
            if(this.player==='x')
                this.player='o';
            else
            {
                if(this.player==='o')
                    this.player='x';
            }
        }
          
    }

    isFinished() {
        if((this.getWinner()=='x')||(this.getWinner()=='o')||(this.noMoreTurns()===true))
        {
            return true;
        }
        return false;
    }

    getWinner() {
        var tmp=false;
        var y,res;
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
              if((y=this.getFieldValue(i,j))!==null)
              {
                 if(((i-1)>=0)&&(y===this.getFieldValue(i-1,j)))
                 {
                    if(((i-2)>=0)&&(y===this.getFieldValue(i-2,j)))
                        {
                            tmp=true;
                            break;
                        }
                 }
                 if(((j-1)>=0)&&(y===this.getFieldValue(i,j-1)))
                 {
                    if(((j-2)>=0)&&(y===this.getFieldValue(i,j-2)))
                        {
                            tmp=true;
                            break;
                        }
                 } 
                 if(((i+1)<3)&&(y===this.getFieldValue(i+1,j)))
                 {
                    if(((i+2)<3)&&(y===this.getFieldValue(i+2,j)))
                        {
                            tmp=true;
                            break;
                        }
                 }
                 if(((j+1)<3)&&(y===this.getFieldValue(i,j+1)))
                 {
                    if(((j+2)<3)&&(y===this.getFieldValue(i,j+2)))
                        {
                            tmp=true;
                            break;
                        }
                 } 
                 if(((j-1)>=0)&&((i-1)>=0)&&(y===this.getFieldValue(i-1,j-1)))
                 {
                    if(((j-2)>=0)&&((i-2)>=0)&&(y===this.getFieldValue(i-2,j-2)))
                        {
                            tmp=true;
                            break;
                        }
                 } 
                 if(((j+1)<3)&&((i+1)<3)&&(y===this.getFieldValue(i+1,j+1)))
                 {
                    if(((j+2)<3)&&((i+2)<3)&&(y===this.getFieldValue(i+2,j+2)))
                        {
                            tmp=true;
                            break;
                        }
                 }  
                 if(((j-1)>=0)&&((i+1)<3)&&(y===this.getFieldValue(i+1,j-1)))
                 {
                    if(((j-2)>=0)&&((i+2)<3)&&(y===this.getFieldValue(i+2,j-2)))
                        {
                            tmp=true;
                            break;
                        }
                 }  
                 if(((j+1)<3)&&((i-1)>=0)&&(y===this.getFieldValue(i-1,j+1)))
                 {
                    if(((j+2)<3)&&((i-2)>=0)&&(y===this.getFieldValue(i-2,j+2)))
                        {
                            tmp=true;
                            break;
                        }
                 }    
              }  
            }
            if(tmp===true)
            {
                break;
            }
        }
        if(tmp===true)
        {
            return y;
        }
        else
            return null;
    }

    noMoreTurns() {
        var tmp=false;
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                if(this.getFieldValue(i,j)===null)
                {
                    tmp=true;    
                    break;
                }
                if(tmp===true)
                    break;
            }
        }
        if(tmp===true)
            return false;
        else
            return true;
    }

    isDraw() {
        if((this.noMoreTurns()===true)&&(this.getWinner()===null))
        {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        var tmp=this.field[rowIndex][colIndex];
        if(tmp===undefined)
            return null;
        else
            return tmp; 
    }
}

module.exports = TicTacToe;
