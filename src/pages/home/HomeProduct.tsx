import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

const HomeProduct: FC = () => {
  return (
    <div>
      <Box p="5%">
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="h4" mb={4}>
              Türkmen edebiýaty
            </Typography>
            <Typography textAlign={"justify"}>
              <strong>Türkmen edebiýaty</strong>—iň gadymy edebiýatlaryň
              biridir. Ol özüniň taryhyny gadymy zamanlardan alyp gaýdýar.
              Türkmen edebiýaty bizi gadymy zamanlardan başlap, şu günlere çenli
              halkyň ýaşaýşy, durmuşy, dürli wakalara gatnaşyşy,
              gahrymançylyklary, pajygaly ýagdaýlary, arzuw-islegleri,
              bagtly-şatlykly durmuşlary bilen bizi tanyş edýär. Halkyň döreden
              şahyrana eserleri: “Gorkut ata”, “Oguznama” ,
              “Kowusnama”,”Görogly” , “Şasenem-Garyp” ýaly onlarça eposlardyr,
              dessanlar köp asyrlar mundan öňki gahrymançylykly, durmuşy, taryhy
              wakalary habar berýär. -Türkmen halky öz taryhyny gadym
              zamanlardan alyp gaýdýan edebiýatyň has ösen döwri orta
              asyrlardyr. Bu asyrlarda Orta Azyýada Mahmyt Kaşgary “Diwany-
              Lügat et-türk” , Abu Abdylla Muyzzi (1047- 1127), Omar Haýýam
              (1048- 1122), Sanjar (1083-1157) “Seljuknama”, Hoja Ahmet Ýasawy
              (1103-1166) , Aly “Kyssaýy-Ýusup” (1233), Mahmyt Pälwan
              (1247-1326), Ahmet Burhaneddin Siwasly (1345-1398) Horezm1i
              “Muhabbetnama” (1353), Seýit Nesimi (1370-1417), Alyşir Nowaýy
              (1441-1501) ,Wepaýy “Rownakyl yslam” (1464) , Muhammet Fizuly
              (1500-1563), Muhammet Baýramhan (1505-1561). Abdyrahym Baýramhan
              ogly (1556-1626), Berhudar Türkmen “Ragna we Zyba” Garaja oglan
              (1606-1679) ýaly beýik şahyrlar ýaşap, öz eserleri bilen dünýä
              edebiýatynyň altyn hazynasyny baýlaşdyrypdyrlar. Orta, asyrlaryň
              iň görnükli meşhur yazyjylarynyň biri Muhammet Baýramhandyr. Ol
              diňe bir şahyr, bagşy-sazanda däl-de , Hindistanda Mongollar
              köşgüniň baş weziri , harby serkerde-”Han- hanan” hem bolupdyr.
              Baýramhanyň türki, pars, urdy dillerinde ýazan goşgulary asyrlar
              geçip, biziň döwrümize ýetipdir.
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img style={{ width: "100%" }} src="/images/poem1.png" alt="" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeProduct;
