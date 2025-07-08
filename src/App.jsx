import { useEffect, useState } from "react";
import "./App.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

function App() {
  const [count, setCount] = useState(0);
  const [dhikr, setDhikr] = useState({
    arabic: "Select",
    transliteration: "",
    translation: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const click = new Audio("/click.mp3");

  useEffect(() => {
    let interval;
    if (count > 0 && count % 100 === 0) {
      click.play();

      interval = setInterval(() => {
        click.play();
      }, 10000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  function reset() {
    setCount(0);
    setDhikr({ arabic: "Select", transliteration: "", translation: "" });
  }

  const change = (e) => {
    const selectedValue = e.target.value;
    const dhikrOptions = {
      "al-Ḥamdu lillāh": {
        arabic: "ٱلْحَمْدُ لِلَّٰهِ",
        transliteration: "Al-ḥamdu lillāh",
        translation: "All praise is due to Allah",
      },
      "Allāhu Akbar": {
        arabic: "ٱللَّٰهُ أَكْبَرُ",
        transliteration: "Allāhu akbar",
        translation: "Allah is the Greatest",
      },
      SubḥānAllāh: {
        arabic: "سُبْحَانَ ٱللَّٰهِ",
        transliteration: "SubḥānAllāh",
        translation: "Glory be to Allah",
      },
      Astaghfirullāh: {
        arabic: "أَسْتَغْفِرُ ٱللَّٰهَ",
        transliteration: "Astaghfirullāh",
        translation: "I seek forgiveness from Allah",
      },
      "Lā ilāha illā Allāh": {
        arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
        transliteration: "Lā ilāha illā Allāh",
        translation: "There is no deity but Allah",
      },
      Bismillāh: {
        arabic: "بِسْمِ ٱللَّٰهِ",
        transliteration: "Bismillāh",
        translation: "In the name of Allah",
      },
      "Allāhu Aḥad": {
        arabic: "ٱللَّٰهُ أَحَدٌ",
        transliteration: "Allāhu aḥad",
        translation: "Allah is One",
      },
      "Rabbana Atina": {
        arabic: "رَبَّنَا آتِنَا",
        transliteration: "Rabbana atina",
        translation: "Our Lord, give us",
      },
      "Innā Lillāhi wa inna ilayhi rājiʿūn": {
        arabic: "إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
        transliteration: "Innā lillāhi wa innā ilayhi rājiʿūn",
        translation:
          "Indeed, we belong to Allah and indeed, to Him we will return",
      },
      "La ḥawla wa la quwwata illā billāh": {
        arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        transliteration: "Lā ḥawla wa lā quwwata illā billāh",
        translation: "There is no power and no strength except with Allah",
      },
      "Tawakkaltu ʿalā Allāh": {
        arabic: "تَوَكَّلْتُ عَلَى ٱللَّٰهِ",
        transliteration: "Tawakkaltu ʿalā Allāh",
        translation: "I place my trust in Allah",
      },
      "Subḥānaka Allāhumma wa bihamdiKa": {
        arabic: "سُبْحَانَكَ ٱللَّٰهُمَّ وَبِحَمْدِكَ",
        transliteration: "Subḥānaka Allāhumma wa bihamdiKa",
        translation: "Glory be to You, O Allah, and praise be to You",
      },
      "Allāhumma salli ʿala Muḥammad": {
        arabic: "ٱللَّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
        transliteration: "Allāhumma salli ʿala Muḥammad",
        translation: "O Allah, send blessings upon Muhammad",
      },
      Ameen: {
        arabic: "آمِينَ",
        transliteration: "Ameen",
        translation: "Amen",
      },
      "Yā Allāh": {
        arabic: "يَا ٱللَّٰهُ",
        transliteration: "Yā Allāh",
        translation: "O Allah",
      },
      "JazakAllāhu Khayran": {
        arabic: "جَزَاكَ ٱللَّٰهُ خَيْرًا",
        transliteration: "JazakAllāhu khayran",
        translation: "May Allah reward you with goodness",
      },
      "Al-ʿAfwu": {
        arabic: "ٱلْعَفْوُ",
        transliteration: "Al-ʿAfwu",
        translation: "Forgiveness",
      },
      "Mā shāʾ Allāh": {
        arabic: "مَا شَاءَ ٱللَّٰهُ",
        transliteration: "Mā shāʾ Allāh",
        translation: "As Allah wills",
      },
      "Wa Allāhu Aʿlam": {
        arabic: "وَأَللَّهُ أَعْلَمُ",
        transliteration: "Wa Allāhu Aʿlam",
        translation: "And Allah knows best",
      },
      "SadaqAllāhul ʿAẓīm": {
        arabic: "صَدَقَ ٱللَّٰهُ ٱلْعَظِيمُ",
        transliteration: "SadaqAllāhul ʿAẓīm",
        translation: "Allah, the Exalted, has spoken the truth",
      },
      "Rabbī zidni ʿilman": {
        arabic: "رَبِّ زِدْنِي عِلْمًا",
        transliteration: "Rabbī zidni ʿilman",
        translation: "My Lord, increase me in knowledge",
      },
      "Yā Allāh, Yā Raḥmān, Yā Raḥīm": {
        arabic: "يَا ٱللَّٰهُ، يَا رَحْمَٰنُ، يَا رَحِيمُ",
        transliteration: "Yā Allāh, Yā Raḥmān, Yā Raḥīm",
        translation: "O Allah, O Most Gracious, O Most Merciful",
      },
      "Alḥamdu lillāhi Rabbil ʿālamīn": {
        arabic: "ٱلْحَمْدُ لِلَّٰهِ رَبِّ ٱلْعَٰلَمِينَ",
        transliteration: "Alḥamdu lillāhi Rabbil ʿālamīn",
        translation: "All praise is due to Allah, Lord of the worlds",
      },
      "Dhu al-Jalāli wa al-Ikraam": {
        arabic: "ذُوالْجَلاَلِ وَالإكْرَامِ",
        transliteration: "Dhu al-Jalāli wa al-Ikraam",
        translation: "Possessor of Glory and Honor",
      },
      "Rabbana wa lakal-ḥamd": {
        arabic: "رَبَّنَا وَلَكَ الْحَمْدُ",
        transliteration: "Rabbana wa lakal-ḥamd",
        translation: "Our Lord, to You belongs all praise",
      },
      "Lā ilāha illā anta, subḥānaka, innī kuntu min aẓ-ẓālimīn": {
        arabic:
          "لَا إِلَٰهَ إِلَّا أَنتَ، سُبْحَانَكَ، إِنِّي كُنْتُ مِنَ ٱلظَّالِمِينَ",
        transliteration:
          "Lā ilāha illā anta, subḥānaka, innī kuntu min aẓ-ẓālimīn",
        translation:
          "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers",
      },
      "Wa inna maʿa al-ʿusri yusra": {
        arabic: "وَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        transliteration: "Wa inna maʿa al-ʿusri yusra",
        translation: "And indeed, with hardship [comes] ease",
      },
      "Hasbunallāhu wa niʿmal-wakīl": {
        arabic: "حَسْبُنَا ٱللَّٰهُ وَنِعْمَ ٱلْوَكِيلُ",
        transliteration: "Hasbunallāhu wa niʿmal-wakīl",
        translation:
          "Sufficient for us is Allah, and [He is] the best disposer of affairs",
      },
      "Rabbi ʿaṭīnī ḥukman wa alḥiqnī biṣ-ṣāliḥīn": {
        arabic: "رَبِّ أَعْطِينِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        transliteration: "Rabbi ʿaṭīnī ḥukman wa alḥiqnī biṣ-ṣāliḥīn",
        translation: "My Lord, grant me wisdom and join me with the righteous",
      },
      "Rabbi inni aʿūdhu bika min ʿilmin lā yanfaʿ": {
        arabic: "رَبِّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ",
        transliteration: "Rabbi inni aʿūdhu bika min ʿilmin lā yanfaʿ",
        translation:
          "My Lord, I seek refuge in You from knowledge that does not benefit",
      },
      "Allahumma inni as'aluka al-jannah": {
        arabic: "ٱللَّٰهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ",
        transliteration: "Allahumma inni as'aluka al-jannah",
        translation: "O Allah, I ask You for Paradise",
      },
      "Allahumma inni a'udhu bika min al-nār": {
        arabic: "ٱللَّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ النَّارِ",
        transliteration: "Allahumma inni a'udhu bika min al-nār",
        translation: "O Allah, I seek refuge in You from the Fire",
      },
      "Inna fataḥnā laka fatḥan mubīna": {
        arabic: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِينًا",
        transliteration: "Inna fataḥnā laka fatḥan mubīna",
        translation:
          "Indeed, We have given you, [O Muhammad], a clear conquest",
      },
      "SubḥānAllāh wa bihamdiH, subḥānAllāh al-ʿAẓīm": {
        arabic:
          "سُبْحَانَ ٱللَّٰهِ وَبِحَمْدِهِ، سُبْحَانَ ٱللَّٰهِ ٱلْعَظِيمِ",
        transliteration: "SubḥānAllāh wa bihamdiH, subḥānAllāh al-ʿAẓīm",
        translation:
          "Glory is to Allah and praise is to Him; glory is to Allah, the Exalted",
      },
      "Astaghfirullāh Rabbi min kulli dhambin wa atūbu ilayh": {
        arabic:
          "أَسْتَغْفِرُ ٱللَّٰهَ رَبِّي مِن كُلِّ ذَنبٍ وَأَتُوبُ إِلَيْهِ",
        transliteration:
          "Astaghfirullāh Rabbi min kulli dhambin wa atūbu ilayh",
        translation:
          "I seek forgiveness from Allah, my Lord, from every sin and I turn to Him",
      },
      "Rabbī ḥab lī ḥukman wa alḥiqnī biṣ-ṣāliḥīn": {
        arabic: "رَبِّ حَبِّ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        transliteration: "Rabbī ḥab lī ḥukman wa alḥiqnī biṣ-ṣāliḥīn",
        translation: "My Lord, grant me wisdom and join me with the righteous",
      },
      "Ya Allah, ya Rahman, ya Rahim, have mercy on us": {
        arabic: "يَا اللَّهُ، يَا رَحْمَٰنُ، يَا رَحِيمُ، ارْحَمْنَا",
        transliteration: "Ya Allah, ya Rahman, ya Rahim, have mercy on us",
        translation:
          "O Allah, O Most Gracious, O Most Merciful, have mercy on us",
      },
      "Rabbi inni aʿūdhu bika min khazāʾin al-ʿilm": {
        arabic: "رَبِّ إِنِّي أَعُوذُ بِكَ مِنْ خَزَائِنِ الْعِلْمِ",
        transliteration: "Rabbi inni aʿūdhu bika min khazāʾin al-ʿilm",
        translation:
          "My Lord, I seek refuge in You from the treasures of knowledge",
      },
      "Rabbana ʿalayka tawakkalnā wa ilayka anabnā": {
        arabic: "رَبَّنَا عَلَيْكَ تَوَكُّلْنَا وَإِلَيْكَ أَنَبْنَا",
        transliteration: "Rabbana ʿalayka tawakkalnā wa ilayka anabnā",
        translation:
          "Our Lord, upon You we have relied, and to You we have returned",
      },
      "Ashhadu an lā ilāha illā Allāh": {
        arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
        transliteration: "Ashhadu an lā ilāha illā Allāh",
        translation: "I bear witness that there is no deity except Allah",
      },
      "Al-ḥamdu lillāhi ʿalā kulli ḥāl": {
        arabic: "ٱلْحَمْدُ لِلَّٰهِ عَلَى كُلِّ حَالٍ",
        transliteration: "Al-ḥamdu lillāhi ʿalā kulli ḥāl",
        translation: "All praise is due to Allah in every situation",
      },
      "Ya Allah, grant us beneficial knowledge": {
        arabic: "يَا اللَّهُ، آتِنَا عِلْمًا نَافِعًا",
        transliteration: "Ya Allah, grant us beneficial knowledge",
        translation: "O Allah, grant us beneficial knowledge",
      },
    };
    setDhikr(dhikrOptions[selectedValue]);
    setIsVisible(false);
  };

  return (
    <>
      <select
        className="form-select w-25 my-2 .fs-6 text text-secondary"
        onChange={change}
        value={dhikr.arabic}
      >
        <option selected disabled value="Select">
          Select
        </option>
        <option value="al-Ḥamdu lillāh">al-Ḥamdu lillāh</option>
        <option value="Allāhu Akbar">Allāhu Akbar</option>
        <option value="SubḥānAllāh">SubḥānAllāh</option>
        <option value="Astaghfirullāh">Astaghfirullāh</option>
        <option value="Lā ilāha illā Allāh">Lā ilāha illā Allāh</option>
        <option value="Bismillāh">Bismillāh</option>
        <option value="Allāhu Aḥad">Allāhu Aḥad</option>
        <option value="Rabbana Atina">Rabbana Atina</option>
        <option value="Innā Lillāhi wa inna ilayhi rājiʿūn">
          Innā Lillāhi wa inna ilayhi rājiʿūn
        </option>
        <option value="La ḥawla wa la quwwata illā billāh">
          La ḥawla wa la quwwata illā billāh
        </option>
        <option value="Tawakkaltu ʿalā Allāh">Tawakkaltu ʿalā Allāh</option>
        <option value="Subḥānaka Allāhumma wa bihamdiKa">
          Subḥānaka Allāhumma wa bihamdiKa
        </option>
        <option value="Allāhumma salli ʿala Muḥammad">
          Allāhumma salli ʿala Muḥammad
        </option>
        <option value="Ameen">Ameen</option>
        <option value="Yā Allāh">Yā Allāh</option>
        <option value="JazakAllāhu Khayran">JazakAllāhu Khayran</option>
        <option value="Al-ʿAfwu">Al-ʿAfwu</option>
        <option value="Mā shāʾ Allāh">Mā shāʾ Allāh</option>
        <option value="Wa Allāhu Aʿlam">Wa Allāhu Aʿlam</option>
        <option value="SadaqAllāhul ʿAẓīm">SadaqAllāhul ʿAẓīm</option>
        <option value="Rabbī zidni ʿilman">Rabbī zidni ʿilman</option>
        <option value="Yā Allāh, Yā Raḥmān, Yā Raḥīm">
          Yā Allāh, Yā Raḥmān, Yā Raḥīm
        </option>
        <option value="Alḥamdu lillāhi Rabbil ʿālamīn">
          Alḥamdu lillāhi Rabbil ʿālamīn
        </option>
        <option value="Dhu al-Jalāli wa al-Ikraam">
          Dhu al-Jalāli wa al-Ikraam
        </option>
        <option value="Rabbana wa lakal-ḥamd">Rabbana wa lakal-ḥamd</option>
        <option value="Lā ilāha illā anta, subḥānaka, innī kuntu min aẓ-ẓālimīn">
          Lā ilāha illā anta, subḥānaka, innī kuntu min aẓ-ẓālimīn
        </option>
        <option value="Wa inna maʿa al-ʿusri yusra">
          Wa inna maʿa al-ʿusri yusra
        </option>
        <option value="Hasbunallāhu wa niʿmal-wakīl">
          Hasbunallāhu wa niʿmal-wakīl
        </option>
        <option value="Rabbi ʿaṭīnī ḥukman wa alḥiqnī biṣ-ṣāliḥīn">
          Rabbi ʿaṭīnī ḥukman wa alḥiqnī biṣ-ṣāliḥīn
        </option>
        <option value="Rabbi inni aʿūdhu bika min ʿilmin lā yanfaʿ">
          Rabbi inni aʿūdhu bika min ʿilmin lā yanfaʿ
        </option>
        <option value="Allahumma inni as'aluka al-jannah">
          Allahumma inni as'aluka al-jannah
        </option>
        <option value="Allahumma inni a'udhu bika min al-nār">
          Allahumma inni a'udhu bika min al-nār
        </option>
        <option value="Inna fataḥnā laka fatḥan mubīna">
          Inna fataḥnā laka fatḥan mubīna
        </option>
        <option value="SubḥānAllāh wa bihamdiH, subḥānAllāh al-ʿAẓīm">
          SubḥānAllāh wa bihamdiH, subḥānAllāh al-ʿAẓīm
        </option>
        <option value="Astaghfirullāh Rabbi min kulli dhambin wa atūbu ilayh">
          Astaghfirullāh Rabbi min kulli dhambin wa atūbu ilayh
        </option>
        <option value="Rabbī ḥab lī ḥukman wa alḥiqnī biṣ-ṣāliḥīn">
          Rabbī ḥab lī ḥukman wa alḥiqnī biṣ-ṣāliḥīn
        </option>
        <option value="Ya Allah, ya Rahman, ya Rahim, arhamna">
          Ya Allah, ya Rahman, ya Rahim, arhamna
        </option>
        <option value="Rabbi inni aʿūdhu bika min khazāʾin al-ʿilm">
          Rabbi inni aʿūdhu bika min khazāʾin al-ʿilm
        </option>
        <option value="Rabbana ʿalayka tawakkalnā wa ilayka anabnā">
          Rabbana ʿalayka tawakkalnā wa ilayka anabnā
        </option>
        <option value="Ashhadu an lā ilāha illā Allāh">
          Ashhadu an lā ilāha illā Allāh
        </option>
        <option value="Al-ḥamdu lillāhi ʿalā kulli ḥāl">
          Al-ḥamdu lillāhi ʿalā kulli ḥāl
        </option>
      </select>
      <div className="card">
        <h6>{dhikr.arabic}</h6>
        <h6>{dhikr.transliteration}</h6>
        <h6>{dhikr.translation}</h6>
        <h1 style={{ userSelect: "none" }} aria-live="polite">
          {count}
        </h1>
        <button
          onClick={() => setCount((count) => count + 1)}
          aria-label="Increase count"
          class="button-82-pushable"
          role="button"
        >
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text" style={{ userSelect: "none" }}>
            {dhikr.arabic}
          </span>
        </button>
        <button
          style={{ userSelect: "none" }}
          onClick={reset}
          aria-label="Reset count"
          className="btn btn-dark"
        >
          reset
        </button>
      </div>
    </>
  );
}

export default App;
