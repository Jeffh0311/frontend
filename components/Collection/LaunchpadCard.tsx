import Image from 'next/image';
import Link from 'next/link';
import { CollectionCardProps } from './CollectionCards';
import { toAmount } from '@/lib/utils';
import BigNumber from 'bignumber.js';

function LaunchpadCard(props: CollectionCardProps) {
  const { sampleData } = props;
  const { detailJson } = sampleData;

  return (
    <Link href={`/collection/${sampleData.collectionId}`}>
      <div className="rounded-lg overflow-hidden relative xl:h-[370px]">
        <img src={detailJson.image} alt={detailJson.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 w-full z-10 bg-[#404833] text-white px-2 pb-2">
          <div className="text-sm mt-1">CryptoPunk</div>
          <div className="flex justify-between text-xs font-thin mt-2">
            <div>
              <div>PRICE</div>
              <div className="mt-1 text-[#9BA885]">
              {`${toAmount(
                      (sampleData.mintPrice as BigNumber.Value) || 0,
                      18,
                    )} ETH`}
              </div>
            </div>
            <div>
              <div>MAX ITEMS</div>
              <div className="mt-1">{sampleData.mintLimit}</div>
            </div>
            <div>
              <div>MINTED</div>
              <div className="text-[#F7EB7F] mt-1"> 
                {`${(sampleData.items * 1.0 / sampleData.mintLimit * 100).toFixed(2)}%`} 
              </div>
            </div>
          </div>
          <div className="flex bg-[#414040] justify-center gap-6 mt-1">
            <div className="text-[#46F12A] flex items-center gap-1 scale-90">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Live
            </div>
            <div className="scale-90 flex gap-1">
              <span className="text-[#A1A1A1]">ends:</span>
              {' '}
              <span>07h 36m 58s</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LaunchpadCard;
